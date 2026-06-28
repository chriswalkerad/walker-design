# walker-design

Chris Walker's design skills — a Claude Code plugin. Not a design *system* (no
package to import, no runtime dependency); a set of **skills** that teach Claude
to build UI in a specific, intentional aesthetic across any project, copying the
tokens *in* rather than depending on them.

The skills are **composable** — the look is separate from the mechanisms that
deliver it, so you can mix them per project (and a non-Tailwind project still
gets the aesthetic).

## Skills

| Skill | What it is |
| --- | --- |
| **walker-ui** | The aesthetic — quiet, minimal, all-white + Notion-dark, warm near-black ink, hairline borders, one sparing yellow accent, 4px grid, airy display type. Ships the exact tokens + the rules that make it *this* look. Framework-agnostic. |
| **walker-tailwind** | The wiring — Tailwind v4 `@theme inline` block that turns the tokens into utilities, the `.dark` variant setup, and the `tailwind-merge` config for the custom type scale. |
| **walker-gsap** | GSAP motion in the house style. *Stub — fill over time.* |
| **walker-motion** | Motion (`motion` / Framer Motion) in the house style. *Stub — fill over time.* |

Source of the aesthetic: the `big` project (Creative Review Workspace).
`walker-ui/reference/tokens.css` is vendored from there as a frozen snapshot —
re-sync deliberately when the look genuinely changes, not automatically.

## Install

```
/plugin marketplace add chriswalkerad/walker-design
/plugin install walker-design@walker-design
```

Or, for personal use on your own machine, symlink the skills into
`~/.claude/skills/` so they're always available without installing.

## Typical use

> "Build a settings page in the walker-ui style with a quiet GSAP reveal."

Claude loads `walker-ui` (look) + `walker-tailwind` (wiring) + `walker-gsap`
(motion) together. Each skill's `description` is what triggers it — keep them
precise.

## Refining (this is a living thing)

The whole point is that the little details get added over weeks and months. When
a new rule earns its place:

- A **principle/rule** → add it as a terse imperative line in the relevant
  `SKILL.md`. Vague guidance does nothing; be specific.
- A **value** → add it to `walker-ui/reference/tokens.css` (with a comment on the
  intent — the comments *are* the rationale).
- A **pattern** → drop a minimal snippet in that skill's `examples/`.
