---
name: walker-motion
description: Use when adding animation to a React project in Chris Walker's style — quiet, intentional Motion (`motion` / framer-motion) and CSS transitions that match the walker-ui restraint. Provides the house easing curves, duration scale, entrance variants (fade + small rise + fast stagger), the signature drawer curve, theme-swap and reduced-motion patterns. Pair with walker-ui.
---

# walker-motion

Motion in the walker aesthetic is **quiet on purpose** — the same restraint as
the UI. Short travel, short durations, ease-OUT. Animation guides the eye to
content; it never performs. If an entrance draws attention to itself, it's wrong.

These values are real — codified from the transitions across the `big` project,
which uses the **`motion`** package (`motion/react`), not GSAP. Pair with
**walker-ui** for the look.

## How to apply this skill

1. Add `reference/transitions.css` alongside walker-ui's `tokens.css` — it
   defines the duration/easing custom properties, the color-only theme swap, the
   skeleton shimmer, and the single global `prefers-reduced-motion` guard.
2. For React entrances, copy `reference/motion.ts` to `src/lib/motion.ts` and use
   its shared variants (`LIST_VARIANTS` / `ROW_VARIANTS` / `FADE_RISE` /
   `PANEL_TRANSITION`). See `examples/staggered-list.tsx`.
3. Reach for tokens, not magic numbers: `var(--duration-*)` + `var(--ease-*)`.

## The duration scale (each has one job)

| Token | Value | Use |
| --- | --- | --- |
| `--duration-micro` | 120ms | squiggle underline, tiny hovers |
| `--duration-fast` | 150ms | hover tints, focus pulse, opacity nudge |
| `--duration-base` | 200ms | opacity fades, **theme color swap**, rail width |
| `--duration-enter` | 220ms | content entrance (fade + rise) |
| `--duration-panel` | 270ms | drawer / panel size + position |
| `--duration-fill` | 300ms | meter / progress bar width |

Don't invent in-between durations.

## The easings

- **`--ease-out`** (`cubic-bezier(0,0,0.2,1)`) — the **default** for nearly
  everything: entrances, fades, bars, hovers.
- **`--ease-drawer`** (`cubic-bezier(0.32,0.72,0,1)`) — the **signature** curve.
  A smooth iOS-style decelerate, used **only** for size/position moves: panels
  opening, columns reflowing, drawers sliding. This is the one curve with
  personality — spend it deliberately.
- **`--ease-theme`** (`ease`) — reserved for the color-only theme swap.
- `ease-in-out` — only for the looping skeleton shimmer.

## Entrance: fade + a *small* rise

The house entrance is a fade plus a **6px** rise (`--enter-rise`), 220ms ease-out,
with a **40ms** stagger between siblings (`staggerChildren: 0.04`,
`delayChildren: 0.06`). Travel is tiny on purpose — panels slide only 12px
(16px on the desktop X-axis). See `LIST_VARIANTS` / `ROW_VARIANTS`.

## Non-negotiable rules

- **Reduced motion disables entrances, it doesn't shorten them.** Use
  `useReducedMotion()` and set `initial={false}` with no variants so elements
  simply appear. The global guard in `transitions.css` is the backstop; don't
  rely on it alone for transform-based entrances.
- **The theme swap animates color properties only** (`background-color`,
  `border-color`, `color`, `fill`, `stroke`, `outline-color`) at 200ms, so
  layout never reflows. Never put `transition: all` on theme.
- **Local transitions stay snappy.** A component's own `transition-colors` (≈150ms
  on buttons/rows/hovers) should win over the 200ms global swap — keep the global
  rule at zero specificity (`*`).
- **Only fills/positions move, never the brand.** Don't animate the yellow accent
  in or pulse it; restraint there is the whole point (see walker-ui).
- **One global reduced-motion guard**, not per-component — components shouldn't
  each re-implement the opt-out.

## Refining this skill

As motion patterns settle (a new spring config, a page-transition convention, an
`AnimatePresence` dismiss pattern), add the value to `transitions.css` /
`motion.ts` and a terse rule here. Keep durations on the scale above; if a new
duration is truly needed, add it as a token, don't inline it.
