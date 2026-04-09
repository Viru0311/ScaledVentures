/**
 * Subscribe to MediaQueryList changes. Uses addEventListener when available,
 * with addListener/removeListener fallback for older Safari (< 14).
 */
export function subscribeMediaQuery(
  mq: MediaQueryList,
  listener: () => void,
): () => void {
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }
  mq.addListener(listener);
  return () => mq.removeListener(listener);
}
