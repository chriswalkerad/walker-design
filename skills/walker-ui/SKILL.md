---
name: walker-ui
description: Use when building or restyling any UI in Chris Walker's signature aesthetic — a quiet, minimal, intentional look with all-white (and a Notion-dark twin) neutral surfaces, warm near-black ink, hairline borders, flat surfaces (no shadows), a single sparing yellow accent, a 4px spacing grid, and large airy display type. Framework-agnostic: ships the exact tokens to copy in. For the Tailwind v4 utility wiring, pair with walker-tailwind.
---

# walker-ui

The look is **quiet on purpose.** Restraint is the brand. Most surfaces are
white (or near-black in dark), structure comes from 1px hairlines rather than
shadows or fills, and color is spent almost nowhere — one small yellow spark,
and functional severity colors only where they carry meaning. When in doubt,
remove emphasis, don't add it.

This skill is the *aesthetic*. It ships the exact token values to copy in
(`reference/tokens.css`). It does **not** wire up Tailwind — for the
`@theme inline` setup that turns these tokens into `bg-surface` / `text-display`
utilities, use the **walker-tailwind** skill. The look itself is
framework-agnostic: the tokens work with plain CSS, CSS modules, or
styled-components just as well.

## How to apply this skill

1. Copy `reference/tokens.css` into the project (e.g. `src/styles/tokens.css`)
   **verbatim** — every value and every comment. The comments are the design
   rationale; don't strip them.
2. Wire the tokens to utilities — see **walker-tailwind** for Tailwind v4, or
   reference the CSS variables directly in any other styling approach.
3. Build components against the **rules below**, never against your defaults.
   Read `examples/button.tsx`, `examples/badge.tsx`, and `examples/signal-bar.tsx`
   for the component grammar (note how the bar's neutral track carries no color
   and only the fill takes a severity tone — and is `aria-hidden` because the
   score is already stated as text).
4. For the deeper "why" behind the contrast tiers and the graphical-vs-text
   severity split, read `reference/rationale.md`.

## The non-negotiable rules

These are the choices that make it *this* look and not a generic clean UI. They
are not defaults — Claude will not produce them unless told.

### Color
- **Pages are pure white** (`--bg` `#ffffff`), or near-black `#191919` in dark.
  Don't introduce gray page backgrounds.
- **Elevation is a faint tint, never a shadow.** Surfaces lift with `--panel`
  (a hair off-white / off-black). Do not use `box-shadow` for cards. Structure
  comes from `--border` hairlines.
- **The yellow accent is a spark, never a fill.** `--accent` (`#facc15`) appears
  only as a tiny accent — an icon, a 2px indicator, a dot. **Never** a button
  fill, never a large block, never a background band. If you're filling more
  than a glyph with yellow, you're wrong.
- **The primary action is INK, not color.** The strong button is `--ink` (warm
  near-black in light, near-white in dark) with `--ink-foreground` label. See
  the `ink` variant in `examples/button.tsx`.
- **Functional color only carries meaning.** `--risk` / `--minor` / `--pass`
  appear only on severity signals (bars, underlines, verdicts). Each has a
  graphical value (`--risk`, ≥3:1) and an AA text value (`--risk-text`, ≥4.5:1)
  — use the `-text` variant whenever the color is on actual text.

### Typography
- **Quiet by default.** Body is 13px (`--font-size-body`), labels 12px, eyebrows
  11px UPPERCASE at `.06em` tracking. UI text is small and calm.
- **Bigness is earned, and only big.** The only large type is the 36px display
  (`--font-size-display`) with tight `-0.02em` tracking. There's no mid-size
  shouting — it jumps from quiet UI text to one airy display title.
- **Tabular numerals on all numeric UI** (`font-variant-numeric: tabular-nums`).
  Scores, counts, version numbers must not wobble.
- **System-first font stack.** SF / Segoe UI native rendering, Inter as the
  cross-platform fallback (`--font-sans` in the theme block).

### Structure & spacing
- **4px grid.** Spacing is `--space-1..12` (4/8/12/16/24/32/48). Don't invent
  in-between values.
- **Hairlines do the work.** `--border` 1px lines define regions. Prefer a
  divider over a filled card; prefer a border over a shadow.
- **Compact, calm controls.** Buttons are small and quiet (~12.5px label, tight
  5/11px padding, 7px `--radius-control`). Radii: `--radius-control` 7px,
  `--radius-card` 8px, `--radius-pill` for chips.

### Motion
- **Quiet and intentional**, matching the UI. Short travel, short durations,
  ease-out; the yellow accent is never animated in. For the full motion language
  (easings, durations, entrance variants, reduced-motion), use **walker-motion**.

### Discipline
- **Never raw hex in components.** Only token-backed utilities / CSS variables.
  A raw `#xxxxxx` in a component is a bug.
- **Light and dark are twins, not afterthoughts.** Every token has a `.dark`
  value. Never hardcode a single-theme color.
- **Accessibility is baked into the tokens.** The contrast tiers already clear
  WCAG AA — use the right text tier (`--text-secondary` for meta, never
  `--text-tertiary` for body) rather than re-deriving contrast.

## Do / Don't

| Do | Don't |
| --- | --- |
| `bg-surface` card with `border border-border` | a card with `shadow-md` |
| INK primary button (`variant="ink"`) | a yellow-filled primary button |
| yellow only on a spark icon | a yellow background band or pill fill |
| 13px body, one 36px display title | 18–24px "subheadings" everywhere |
| `text-secondary` for meta copy | `text-tertiary` for body text |
| `gap-2` / `p-4` (4px grid) | `gap-[10px]` / `p-[14px]` |
| token utilities (`text-risk-text`) | raw `text-[#b3402c]` |

## Refining this skill

This aesthetic is a living thing — the little details get added over time. When
a new rule earns its place (a specific easing, a hover treatment, a spacing
relationship), add it to the relevant section above as a terse rule, and if it's
a value, add it to `reference/tokens.css`. Keep rules imperative and specific;
vague guidance ("keep it clean") does nothing — Claude already thinks it's clean.
