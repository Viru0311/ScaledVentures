import { useLayoutEffect, useState } from "react";
import { subscribeMediaQuery } from "@/lib/mediaQuery";

const HOVER_FINE_QUERY = "(hover: hover) and (pointer: fine)";

/**
 * True when the device is likely using mouse/trackpad with real hover.
 * False for most phones/tablets (including iPad touch), where nav should be click/tap driven.
 */
export function usePrefersHoverNav(): boolean {
  const [prefersHover, setPrefersHover] = useState(true);

  useLayoutEffect(() => {
    const mq = window.matchMedia(HOVER_FINE_QUERY);
    const sync = () => setPrefersHover(mq.matches);
    sync();
    return subscribeMediaQuery(mq, sync);
  }, []);

  return prefersHover;
}
