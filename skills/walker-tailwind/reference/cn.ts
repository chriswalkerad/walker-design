import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * The project's custom `text-{label-xs,label-sm,body,…}` utilities are
 * font-size scales, but the stock tailwind-merge groups every `text-*` class as
 * one conflict — so it would drop `text-label-xs` whenever a `text-text-*`
 * color sits alongside it. Teach merge that these names are font-sizes so the
 * size and the color coexist (and overrides still resolve correctly).
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'label-xs',
            'label-sm',
            'body',
            'body-emphasis',
            'title',
            'heading',
            'display',
            'doc-body',
            'doc-title',
            'chip',
          ],
        },
      ],
    },
  },
})

/** Merge Tailwind class names, resolving conflicts (shadcn convention). */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
