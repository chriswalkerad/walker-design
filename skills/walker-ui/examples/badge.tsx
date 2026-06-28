import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The visual flavours of {@link Badge}. All variants share one base pill
 * (height, padding, radius, border, and text scale) so the chips read as a
 * single family; only the surface, ink, and casing differ.
 *
 * - `status`  — neutral status pill on `panel`; supports a leading `dot`.
 * - `subtype` — uppercase tag on `surface` (the quieter, smaller-feeling tag).
 * - `context` — read-only project-context pill on `panel`.
 * - `mode`    — the DOCUMENT-LEVEL / INLINE uppercase mode label.
 */
export type BadgeVariant = "status" | "subtype" | "context" | "mode";

interface BadgeProps {
  /** Visual flavour of the pill. Defaults to `status`. */
  variant?: BadgeVariant;
  /** Render a leading neutral status dot (most relevant to the `status` variant). */
  dot?: boolean;
  /** Pill contents (label text or composed nodes). */
  children: ReactNode;
  className?: string;
}

/**
 * The shared base: one consistent pill — same height, padding, radius, border,
 * and text scale across every variant, so the chips read as a single family.
 */
const BADGE_BASE =
  "inline-flex items-center gap-1 rounded-pill border border-border px-2 py-0.5 text-label-xs";

/** Per-variant surface / ink / casing on top of the shared base. */
const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  status: "bg-panel text-text-secondary",
  subtype: "bg-surface text-text-tertiary uppercase",
  context: "bg-panel text-text-secondary",
  mode: "bg-panel text-text-secondary uppercase",
};

/**
 * One shared pill for the workspace's small chips: a consistent size with a
 * `variant` selecting surface/ink/casing.
 */
export function Badge({ variant = "status", dot, children, className }: BadgeProps) {
  return (
    <span className={cn(BADGE_BASE, VARIANT_CLASSES[variant], className)}>
      {dot ? (
        <span
          className="size-1.5 rounded-pill bg-text-tertiary"
          aria-hidden="true"
          data-badge-dot=""
        />
      ) : null}
      {children}
    </span>
  );
}
