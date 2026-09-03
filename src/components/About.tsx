"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ABOUT_IMAGE, SECTION_IDS } from "@/data/site";
import { EASE_OUT, fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";

/** נקודות עבודה — תוכן זמני שיוחלף בסיפור החברה הסופי */
const HIGHLIGHTS = [
  {
    title: "תכנון לפני עבודה",
    text: "מגדירים יחד היקף, חומרים ולוח זמנים לפני שמתחילים לפרק.",
  },
  {
    title: "אתר עבודה מסודר",
    text: "שמירה על ניקיון ועל סדר לאורך הפרויקט, גם בדירה מאוכלסת.",
  },
  {
    title: "איש קשר אחד",
    text: "מול מי מדברים ברור מהיום הראשון ועד מסירת העבודה.",
  },
];

export function About() {
  return (
    <section
      id={SECTION_IDS.about}
      aria-labelledby="about-title"
      className="bg-sand-100 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="relative aspect-4/3 w-full overflow-hidden bg-sand-200 lg:order-last lg:aspect-square"
        >
          <Image
            src={ABOUT_IMAGE.src}
            alt={ABOUT_IMAGE.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500"
          >
            <span aria-hidden className="h-px w-8 bg-ink-400/60" />
            אודות
          </motion.span>

          <motion.h2
            id="about-title"
            variants={fadeUp}
            className="text-balance text-3xl font-semibold leading-[1.2] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]"
          >
            על דניאל שיפוצים
          </motion.h2>

          {/* תוכן זמני — סיפור החברה המלא ייכתב בשלב הבא */}
          <motion.p
            variants={fadeUp}
            className="text-pretty text-base leading-relaxed text-ink-600 sm:text-lg"
          >
            דניאל שיפוצים מבצעת שיפוצי דירות, מטבחים, חדרי רחצה ועבודות גמר.
            אנחנו מתחילים בהבנה של מה שאתם רוצים לקבל בסוף, בונים תכנית עבודה
            ברורה, ומבצעים אותה בשקיפות מלאה — בלי הפתעות בדרך.
          </motion.p>

          <motion.ul variants={fadeUp} className="flex flex-col gap-5 pt-1">
            {HIGHLIGHTS.map((item) => (
              <li key={item.title} className="border-s-2 border-ink-800/15 ps-5">
                <h3 className="text-base font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-600">
                  {item.text}
                </p>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="pt-2">
            <Button onClick={() => scrollToSection(SECTION_IDS.quote)}>
              קבל הצעת מחיר
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
