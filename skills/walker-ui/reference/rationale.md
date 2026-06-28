# walker-ui — rationale

The "why" behind the non-obvious token choices. Read this when a value looks
arbitrary or when you're tempted to "fix" it. (Full per-token notes live inline
in `tokens.css` — this file is the summary.)

## Contrast tiers are deliberate, not decorative

The three text tiers are tuned against WCAG 2.1 AA, not picked by eye:

- `--text-primary` (`#37352f`, warm near-black) — body and headings.
- `--text-secondary` (`#6b6a64`) — meta copy. Clears **4.5:1** on bg / surface /
  panel, so it's safe for real text.
- `--text-tertiary` (`#737269`) — placeholders, badges, breadcrumbs, eyebrows.
  It is **also real text**, so it's darkened to still clear 4.5:1 — while staying
  a touch lighter than secondary. **Do not use it for body copy** even though it
  passes; the hierarchy depends on secondary > tertiary.

In dark mode the same tiers are re-derived against `#191919` / `#202020` /
`#262625`, so a tier means the same thing in both themes.

## Graphical vs. text severity (the `-text` split)

Severity colors do two different jobs that need different contrast thresholds:

- **Graphical** (`--risk` / `--minor` / `--pass`) — squiggle underlines, signal
  fill bars. These only need ≥3:1 (the non-text threshold), so they can stay
  bright and saturated.
- **Text** (`--risk-text` / `--minor-text` / `--pass-text`) — error copy, drift
  labels, verdicts, quoted issues. These need ≥4.5:1, so they're darker.

Rule: if the severity color is on **text**, use the `-text` variant. If it's a
**bar, underline, or fill**, use the plain variant. In dark mode the bright
values already clear 4.5:1, so the two are equal there (kept separate only for
token parity).

## Why the accent label has its own token

`--accent` (`#facc15`) is the **same** yellow in both light and dark. Neither
`--text-primary` nor `--bg` reads on it across both themes, so `--on-accent`
(`#37352f`, a near-black) is a dedicated dark-in-both-themes label/icon color for
anything sitting on the yellow.

## Why the focus ring is gray, not yellow

`--focus` is a calm neutral gray, deliberately **not** the brand yellow — the
accent stays a rare spark, and a yellow focus ring would both cheapen it and
clash with the `--minor` yellow severity color.

## Why INK instead of a colored primary

The strong action is `--ink` (warm near-black in light, near-white in dark) with
`--ink-foreground`. Keeping the primary monochrome is what lets the single yellow
accent stay meaningful — if the primary button were colored, the accent would
have nothing to be rare against.
