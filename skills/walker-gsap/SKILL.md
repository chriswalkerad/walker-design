---
name: walker-gsap
description: Use when adding GSAP animation to a project in Chris Walker's style — quiet, intentional motion that matches the walker-ui restraint. STUB — fill with specific easing curves, durations, and motion principles as they're settled. Pair with walker-ui.
---

# walker-gsap

> **Stub — not yet sourced.** The `big` project uses the `motion` package, not
> GSAP, so there are no real GSAP patterns to codify here yet. The canonical
> motion language lives in **walker-motion**; fill this in by lifting settled
> GSAP/ScrollTrigger patterns from the heychris.design portfolio once they prove
> out. Don't invent values — add specifics over time.

Motion in the walker aesthetic should feel like the UI: **quiet and
intentional.** Animation earns its place; it never decorates. Match the easing
and duration language in **walker-motion** (ease-out default, the
`cubic-bezier(0.32,0.72,0,1)` signature curve for size/position moves).

## To fill in (delete each line as it's answered)

- [ ] Signature easing curve(s) — the house `CustomEase` / cubic-bezier.
- [ ] Default durations (micro / entrance / transition) and the rule for when
      each applies.
- [ ] Stagger conventions (amount, direction).
- [ ] What animates and what must not (e.g. never animate the yellow accent in).
- [ ] Reduced-motion handling.
- [ ] Setup notes: GSAP version, React integration (`useGSAP`), SSR caveats.
- [ ] 1–2 reference snippets in `examples/`.

## Principle (the one rule already true)

Motion matches the UI's restraint. If an animation draws attention to itself
rather than to the content, it's wrong. See **walker-ui** for the aesthetic.
