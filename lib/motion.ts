// The one sanctioned in-view animation (ADR-11): fade-rise.
// Components gate on useReducedMotion and pass the result to these helpers.

export const FADE_RISE_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
export const FADE_RISE_DURATION = 0.6
export const FADE_RISE_HIDDEN = { opacity: 0, y: 24 }
export const FADE_RISE_VISIBLE = { opacity: 1, y: 0 }

export function fadeRiseTransition(delay = 0) {
  return { duration: FADE_RISE_DURATION, delay, ease: FADE_RISE_EASE }
}

/** Spread-props helper for whileInView usage. Pass useReducedMotion()'s value. */
export function fadeRiseInView(reduced: boolean | null, delay = 0, amount?: number) {
  if (reduced) return {}
  return {
    initial: FADE_RISE_HIDDEN,
    whileInView: FADE_RISE_VISIBLE,
    viewport: amount !== undefined ? { once: true, amount } : { once: true },
    transition: fadeRiseTransition(delay),
  }
}

/** Spread-props helper for mount (animate) usage. Pass useReducedMotion()'s value. */
export function fadeRiseMount(reduced: boolean | null, delay = 0) {
  if (reduced) return {}
  return {
    initial: FADE_RISE_HIDDEN,
    animate: FADE_RISE_VISIBLE,
    transition: fadeRiseTransition(delay),
  }
}
