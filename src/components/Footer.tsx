"use client";

import { NAV_ITEMS, SECTION_IDS, SERVICES, SITE } from "@/data/site";
import { scrollToSection } from "@/lib/scroll";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800/10 bg-sand-100">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <span className="text-lg font-semibold tracking-tight text-ink-900">
              {SITE.name}
            </span>
            <p className="max-w-xs text-pretty text-[0.95rem] leading-relaxed text-ink-600">
              {SITE.tagline}.
            </p>
            <a
              href={SITE.phoneHref}
              dir="ltr"
              className="mt-1 self-start text-[0.95rem] font-medium text-ink-800 underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              {SITE.phoneDisplay}
            </a>
          </div>

          <nav aria-label="ניווט בתחתית האתר" className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
              ניווט
            </h2>
            <ul className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.sectionId}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.sectionId)}
                    className="text-[0.95rem] text-ink-600 transition-colors hover:text-ink-900"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
              שירותים
            </h2>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(SECTION_IDS.services)}
                    className="text-start text-[0.95rem] text-ink-600 transition-colors hover:text-ink-900"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-800/10 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. כל הזכויות שמורות.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection(SECTION_IDS.quote)}
            className="self-start text-ink-600 underline underline-offset-4 transition-colors hover:text-ink-900 sm:self-auto"
          >
            לקבלת הצעת מחיר
          </button>
        </div>
      </div>
    </footer>
  );
}
