"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";

type SectionHeadingProps = {
  /** תווית קטנה מעל הכותרת, למשל "שירותים" */
  eyebrow: string;
  title: string;
  description?: string;
  /** מזהה לשימוש ב-aria-labelledby של הסקשן */
  titleId?: string;
  align?: "start" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  align = "start",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      <motion.span
        variants={fadeUp}
        className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-500"
      >
        <span aria-hidden className="h-px w-8 bg-ink-400/60" />
        {eyebrow}
      </motion.span>

      <motion.h2
        id={titleId}
        variants={fadeUp}
        className="text-balance text-3xl font-semibold leading-[1.2] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          variants={fadeUp}
          className="text-pretty text-base leading-relaxed text-ink-600 sm:text-lg"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
