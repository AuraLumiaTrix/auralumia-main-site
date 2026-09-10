"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function SmoothPageNavigation() {
  const router = useRouter();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const element = event.target instanceof Element ? event.target : null;
      const anchor = element?.closest("a");
      const href = anchor?.getAttribute("href");

      if (!anchor || !href || href.startsWith("#") || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const destination = new URL(href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;

      event.preventDefault();
      const nextPath = `${destination.pathname}${destination.search}${destination.hash}`;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (window.scrollY < 48 || reduceMotion) {
        router.push(nextPath);
        return;
      }

      const duration = Math.min(650, Math.max(280, window.scrollY * 0.12));
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.setTimeout(() => router.push(nextPath), duration);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  return null;
}
