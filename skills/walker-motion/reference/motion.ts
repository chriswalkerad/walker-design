/**
 * walker-motion — shared Motion (`motion/react`) presets in the house style.
 *
 * These are the real entrance variants from the `big` project, generalized.
 * Import them rather than re-declaring transitions inline, so every list and
 * panel shares one feel: a quiet fade + a SMALL rise, ease-out, fast stagger.
 *
 * Usage:
 *   import { LIST_VARIANTS, ROW_VARIANTS } from "@/lib/motion"
 *   const reduceMotion = useReducedMotion()
 *   <motion.div
 *     initial={reduceMotion ? false : "hidden"}
 *     animate="shown"
 *     variants={reduceMotion ? undefined : LIST_VARIANTS}
 *   >
 *     {items.map((it) => (
 *       <motion.div key={it.id} variants={reduceMotion ? undefined : ROW_VARIANTS}>
 *         <Row {...it} />
 *       </motion.div>
 *     ))}
 *   </motion.div>
 */

/** Parent: orchestrates a quick stagger of its children on enter. */
export const LIST_VARIANTS = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.04, delayChildren: 0.06 } },
} as const

/** Child: fade in while rising a tiny 6px. Short, ease-out, never showy. */
export const ROW_VARIANTS = {
  hidden: { opacity: 0, y: 6 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
} as const

/**
 * One-shot fade+rise for a single element (no stagger). Same feel as a row.
 */
export const FADE_RISE = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.22, ease: "easeOut" as const },
} as const

/**
 * The signature panel/drawer transition, for `motion` size/position moves that
 * mirror the CSS `--ease-drawer` curve. Use for elements entering from an edge.
 */
export const PANEL_TRANSITION = {
  duration: 0.27,
  ease: [0.32, 0.72, 0, 1] as const,
} as const
