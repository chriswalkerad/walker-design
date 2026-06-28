import { motion, useReducedMotion } from "motion/react";
import { LIST_VARIANTS, ROW_VARIANTS } from "@/lib/motion";

/**
 * The house entrance for a list of results/rows (distilled from the `big`
 * project's results panel). Each row fades in and rises a tiny 6px, 220ms
 * ease-out, with a 40ms stagger so the list resolves top-to-bottom without
 * drawing attention to the motion itself.
 *
 * Reduced motion is honored by DISABLING the entrance entirely (`initial={false}`
 * + no variants) rather than shortening it — the rows simply appear. This
 * composes with the global `prefers-reduced-motion` guard in transitions.css.
 */
export function StaggeredList<T extends { id: string }>({
  items,
  renderItem,
}: {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={reduceMotion ? false : "hidden"}
      animate="shown"
      variants={reduceMotion ? undefined : LIST_VARIANTS}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={reduceMotion ? undefined : ROW_VARIANTS}
        >
          {renderItem(item)}
        </motion.div>
      ))}
    </motion.div>
  );
}
