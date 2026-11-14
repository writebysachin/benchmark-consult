"use client";

import { useEffect } from "react";

export default function RemoveNetlifyBadge() {
  useEffect(() => {
    const remove = () => {
      document
        .querySelectorAll<HTMLElement>(
          'a[href*="netlify.com"], [data-netlify-identity-button], #netlify-identity-widget, iframe[src*="netlify"]'
        )
        .forEach((el) => {
          const style = window.getComputedStyle(el);
          if (style.position === "fixed" || style.position === "absolute") {
            el.remove();
          }
        });
    };

    remove();
    // Also observe for late-injected badge
    const observer = new MutationObserver(remove);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
