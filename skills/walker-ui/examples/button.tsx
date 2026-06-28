import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "ink" | "default" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual emphasis:
   *   - `ink`     — the charcoal/near-white INK primary (strong action).
   *   - `default` — a quiet hairline-bordered surface button (the default).
   *   - `ghost`   — borderless, tints on hover (low-emphasis / icon rows).
   */
  variant?: ButtonVariant;
  children: ReactNode;
}

/**
 * The shared compact button primitive (Notion-style). One small, quiet scale —
 * ~12.5px label, tight 5px/11px padding, 7px radius (`rounded-control`), a
 * hairline border — used app-wide so every page inherits the same feel. The
 * brand yellow appears only as a tiny accent (e.g. a spark icon) inside a
 * button, never as the fill.
 *
 * Token-driven: the INK primary fills with `--ink` (warm near-black in light,
 * near-white in dark) and labels with `--ink-foreground`.
 */
const base = cn(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-control",
  "px-[11px] py-[5px] text-[12.5px] font-medium leading-4",
  "transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 focus-visible:ring-offset-bg",
  "disabled:pointer-events-none disabled:opacity-50",
);

const variants: Record<ButtonVariant, string> = {
  ink: cn(
    "border border-ink bg-ink text-ink-foreground",
    "hover:bg-ink-hover hover:border-ink-hover",
  ),
  default: cn(
    "border border-border bg-surface text-text-secondary",
    "hover:bg-panel hover:text-text-primary",
  ),
  ghost: cn(
    "border border-transparent bg-transparent text-text-secondary",
    "hover:bg-panel hover:text-text-primary",
  ),
};

/**
 * The full class string for a button variant (base + variant). Use this to give
 * a non-`<button>` element (e.g. a Next `<Link>` that must keep its link role &
 * navigation) the exact compact button look without re-implementing the styles.
 */
export function buttonClass(
  variant: ButtonVariant = "default",
  className?: string,
): string {
  return cn(base, variants[variant], className);
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "default", type = "button", className, children, ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={buttonClass(variant, className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);
