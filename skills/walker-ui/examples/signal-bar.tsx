import { cn } from '@/lib/utils'
import { BAR_TONE_BG, barFillPercent, barTone } from '@/lib/doc-page'

interface SignalBarProps {
  /** Signal score, 0-100. */
  score: number
  /** The signal's own pass threshold (drives the fill color). */
  threshold: number
  /** Max score (default 100). */
  max?: number
  className?: string
}

/**
 * A single proportional fill bar. Width = score/max; fill color is green/amber/red
 * relative to the signal's OWN threshold (see `barTone`). The track is neutral; only
 * the fill carries the functional severity color, per the design-tokens spec.
 *
 * Purely DECORATIVE: it visualizes the score that the surrounding `SignalRow` already
 * states as text (name + numeric score + pass/fail). It carries no accessible name of
 * its own, so it is `aria-hidden` — a `role="meter"` with no name is a 1.1.1/4.1.2
 * violation, and the bar restates information already available as text, so nothing is
 * lost by hiding it from assistive tech.
 */
export function SignalBar({ score, threshold, max = 100, className }: SignalBarProps) {
  const tone = barTone(score, threshold)
  const width = barFillPercent(score, max)

  return (
    <div
      className={cn('h-1.5 w-full overflow-hidden rounded-pill bg-panel', className)}
      aria-hidden="true"
      data-tone={tone}
    >
      <div
        className={cn('h-full rounded-pill transition-[width] duration-300 ease-out', BAR_TONE_BG[tone])}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
