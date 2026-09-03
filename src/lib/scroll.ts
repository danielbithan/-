/**
 * גלילה חלקה לסקשן לפי מזהה, עם התחשבות בגובה הניווט הדביק.
 * מכבד את העדפת המשתמש לצמצום אנימציות.
 */
export function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const top = target.getBoundingClientRect().top + window.scrollY - 72;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}
