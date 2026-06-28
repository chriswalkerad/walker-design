---
name: walker-tailwind
description: Use when wiring walker-ui design tokens into Tailwind v4, or when setting up Tailwind v4 with a CSS-variable token system and a next-themes class-based dark mode. Provides the @theme inline block that turns tokens into utilities (bg-surface, text-display, rounded-control), the @custom-variant dark setup, and a tailwind-merge config that handles custom font-size utilities. Pair with walker-ui for the aesthetic itself.
---

# walker-tailwind

The mechanism that turns **walker-ui** tokens into Tailwind utilities. This skill
is about *wiring*, not look — read **walker-ui** for the aesthetic and rules.

Tailwind v4 here is config-in-CSS (no `tailwind.config.js`). Tokens are CSS
variables; `@theme inline` maps them to utilities that resolve `var()` at
runtime, so a single `.dark` class flips every color.

## How to apply this skill

1. Ensure the project has `walker-ui`'s `tokens.css` in place (e.g.
   `src/styles/tokens.css`).
2. Use `reference/theme-block.css` as your global stylesheet. It imports
   Tailwind, imports the tokens, declares the dark variant, and maps every token
   to a utility. Adjust the two `@import` paths to your layout.
3. Set up `cn()` from `reference/cn.ts` (needs `clsx` + `tailwind-merge`). This
   is the merge helper every component uses.
4. Drive dark mode with `next-themes` using the **class** strategy (a `.dark`
   class on `<html>`).

## What you get

Token-backed utilities, no raw values in components:

- Color: `bg-bg`, `bg-surface`, `bg-panel`, `bg-app-canvas`, `border-border`,
  `text-primary/secondary/tertiary`, `text-accent`/`bg-accent`, `text-on-accent`,
  `ring-focus`, `bg-ink`/`text-ink-foreground`, and severity
  `text-risk/minor/pass` + `-text` variants (+ `bg-`/`border-`).
- Type: `text-label-xs … text-display`, `text-doc-body`, `text-doc-title`
  (each carries its line-height / weight / tracking).
- Spacing: `p-1 … p-12`, `gap-*` on the 4px grid.
- Radius: `rounded-control` (7px), `rounded-card` (8px), `rounded-pill`.

## The tailwind-merge gotcha (important)

The custom `text-{label-xs,body,display,…}` utilities are **font sizes**, but
stock `tailwind-merge` groups every `text-*` as one conflict class — so it would
silently drop `text-label-xs` whenever a `text-text-secondary` color sits beside
it. `reference/cn.ts` uses `extendTailwindMerge` to register these names as the
`font-size` group, so size + color coexist and overrides still resolve.

If you add a new `text-<name>` size utility to the theme block, **also add its
name to the `font-size` list in `cn.ts`**, or it will get eaten by color classes.

## Notes

- `@theme inline` (not plain `@theme`) is required so utilities reference
  `var(--token)` directly and respond to the `.dark` toggle at runtime.
- `@custom-variant dark (&:where(.dark, .dark *))` tells Tailwind v4 to treat the
  next-themes `.dark` class as the dark variant.
- `font-variant-numeric: tabular-nums` is set on `body` so numeric UI is steady.
