"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HERO_IMAGE, SECTION_IDS, SITE } from "@/data/site";
import { EASE_OUT, fadeUp, staggerContainer } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-sand-50 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-7"
        >
          <motion.span
            variants={fadeUp}
            className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500"
          >
            <span aria-hidden className="h-px w-8 bg-ink-400/60" />
            {SITE.name}
          </motion.span>

          <motion.h1
            id="hero-title"
            variants={fadeUp}
            className="text-balance text-[2.1rem] font-semibold leading-[1.18] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]"
          >
            שיפוץ שמתחיל בתכנון נכון ונגמר בבית שאתה רוצה לחזור אליו
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-pretty text-base leading-relaxed text-ink-600 sm:text-lg"
          >
            שיפוץ דירות, מטבחים, חדרי רחצה ועבודות גמר.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <Button onClick={() => scrollToSection(SECTION_IDS.quote)}>
              קבל הצעת מחיר
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection(SECTION_IDS.projects)}
            >
              העבודות שלנו
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.15 }}
          className="relative aspect-4/5 w-full overflow-hidden bg-sand-200 sm:aspect-3/2 lg:aspect-4/5"
        >
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
