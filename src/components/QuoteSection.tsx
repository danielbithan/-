"use client";

import { motion } from "framer-motion";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { SECTION_IDS, SITE } from "@/data/site";
import { EASE_OUT, fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";

/** מה קורה אחרי שליחת הבקשה — מסביר את התהליך ומוריד חיכוך */
const STEPS = [
  {
    title: "שיחה קצרה",
    text: "נחזור אליכם כדי להבין את היקף העבודה ואת מה שחשוב לכם.",
  },
  {
    title: "פגישה בנכס",
    text: "מגיעים לראות את המצב הקיים ולוקחים מידות.",
  },
  {
    title: "הצעת מחיר מפורטת",
    text: "מקבלים פירוט של העבודות, החומרים ולוח הזמנים.",
  },
];

export function QuoteSection() {
  return (
    <section
      id={SECTION_IDS.quote}
      aria-labelledby="quote-title"
      className="bg-ink-900 py-20 text-sand-50 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sand-300"
          >
            <span aria-hidden className="h-px w-8 bg-sand-300/50" />
            הצעת מחיר
          </motion.span>

          <motion.h2
            id="quote-title"
            variants={fadeUp}
            className="text-balance text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl lg:text-[2.75rem]"
          >
            קבל הצעת מחיר
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-pretty text-base leading-relaxed text-sand-200 sm:text-lg"
          >
            מלאו את הפרטים ונחזור אליכם עם הצעה שמתאימה להיקף העבודה ולתקציב
            שלכם.
          </motion.p>

          <motion.ol variants={fadeUp} className="flex flex-col gap-6 pt-2">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sand-300/30 text-sm text-sand-200"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-sand-50">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-sand-300">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </motion.ol>

          <motion.p variants={fadeUp} className="pt-2 text-sm text-sand-300">
            מעדיפים לדבר?{" "}
            <a
              href={SITE.phoneHref}
              dir="ltr"
              className="font-medium text-sand-50 underline underline-offset-4 transition-opacity hover:opacity-75"
            >
              {SITE.phoneDisplay}
            </a>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="text-ink-900"
        >
          <QuoteForm />
        </motion.div>
      </div>
    </section>
  );
}
