---
name: walker-motion
description: Use when adding Motion (Framer Motion / the `motion` package) animation to a React project in Chris Walker's style — quiet, intentional motion matching the walker-ui restraint. STUB — fill with specific transitions, spring configs, and variants as they're settled. Pair with walker-ui.
---

# walker-motion

> **Stub.** Placeholder to be filled in as the motion language gets settled.
> Add specifics over time — don't ship vague guidance.

Uses the `motion` package (the successor to `framer-motion`). Motion should feel
like the UI: **quiet and intentional.**

## To fill in (delete each line as it's answered)

- [ ] House transition presets (spring config vs. tween + duration/ease) and
      when to use each.
- [ ] Shared `variants` for the common cases (fade/slide-in, list stagger,
      presence enter/exit).
- [ ] `AnimatePresence` conventions (drawer/dialog dismiss).
- [ ] `layout` animation rules — where it's allowed, where it's banned.
- [ ] Reduced-motion handling (`useReducedMotion`).
- [ ] 1–2 reference snippets in `examples/`.

## Principle (the one rule already true)

Motion matches the UI's restraint — it guides attention to content, never to
itself. See **walker-ui** for the aesthetic. (`big` already depends on `motion`;
lift settled patterns from there as they prove out.)
