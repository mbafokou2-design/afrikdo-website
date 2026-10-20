import { useLayoutEffect } from "react";

const SELECTORS = [
  ".section-title",
  ".home-about__image",
  ".home-about__text",
  ".focus-card",
  ".cta__inner",
  ".about-text",
  ".about-facts",
  ".about-focus__item",
  ".about-cta",
  ".board-card",
  ".gallery__item",
  ".donate-info",
  ".bank-card",
  ".info-card",
  ".contact-actions",
  ".map-wrap",
  ".footer__col",
];

const DURATION = 700;

export function useScrollReveal(pageKey: string) {
  useLayoutEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const elements: HTMLElement[] = [];

    SELECTORS.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        const siblings = element.parentElement
          ? Array.from(element.parentElement.children).filter((child) =>
              child.matches(selector),
            )
          : [element];
        const index = Math.max(0, siblings.indexOf(element));
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index, 6) * 90}ms`,
        );
        element.classList.add("reveal");
        elements.push(element);
      });
    });

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.classList.add("reveal--visible");
          observer.unobserve(element);

          const delay =
            Number.parseInt(
              element.style.getPropertyValue("--reveal-delay"),
              10,
            ) || 0;
          timers.push(
            window.setTimeout(() => {
              element.classList.remove("reveal", "reveal--visible");
              element.style.removeProperty("--reveal-delay");
            }, DURATION + delay + 150),
          );
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      elements.forEach((element) => {
        element.classList.remove("reveal", "reveal--visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [pageKey]);
}
