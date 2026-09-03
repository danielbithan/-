"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, SECTION_IDS, SITE } from "@/data/site";
import { EASE_OUT } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // נעילת גלילת הרקע כשהתפריט הנייד פתוח
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // סגירת התפריט במקש Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleNavigate = (sectionId: string) => {
    setIsMenuOpen(false);
    // המתנה לסגירת התפריט לפני הגלילה כדי שהמדידה תהיה מדויקת
    window.setTimeout(() => scrollToSection(sectionId), 10);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "border-b border-ink-800/10 bg-sand-50/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => handleNavigate(SECTION_IDS.hero)}
          className="flex shrink-0 items-baseline gap-2 text-lg font-semibold tracking-tight text-ink-900 sm:text-xl"
        >
          {SITE.name}
        </button>

        <nav aria-label="ניווט ראשי" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.sectionId}>
                <button
                  type="button"
                  onClick={() => handleNavigate(item.sectionId)}
                  className="relative py-2 text-[0.95rem] text-ink-600 transition-colors duration-200 hover:text-ink-900"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={() => handleNavigate(SECTION_IDS.quote)}
            className="inline-flex min-h-11 items-center bg-ink-800 px-6 text-[0.95rem] font-medium text-sand-50 transition-colors duration-300 hover:bg-ink-900"
          >
            קבל הצעת מחיר
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "סגירת התפריט" : "פתיחת התפריט"}
          className="-me-2 flex h-12 w-12 items-center justify-center text-ink-900 lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-2 h-px bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute inset-x-0 top-4 h-px bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="overflow-hidden border-t border-ink-800/10 bg-sand-50 lg:hidden"
          >
            <nav aria-label="ניווט נייד" className="px-5 pb-7 pt-4 sm:px-8">
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <li key={item.sectionId}>
                    <button
                      type="button"
                      onClick={() => handleNavigate(item.sectionId)}
                      className="w-full border-b border-ink-800/8 py-4 text-start text-lg text-ink-800"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleNavigate(SECTION_IDS.quote)}
                className="mt-6 flex min-h-13 w-full items-center justify-center bg-ink-800 px-6 text-base font-medium text-sand-50"
              >
                קבל הצעת מחיר
              </button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
