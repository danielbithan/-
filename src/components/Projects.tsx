"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS, SECTION_IDS } from "@/data/site";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.li variants={fadeUp} className="group flex flex-col">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-sand-200">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 44vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col gap-2.5 pt-5">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-500">
          {project.city}
        </span>

        <h3 className="text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
          {project.type}
        </h3>

        <p className="text-pretty text-[0.95rem] leading-relaxed text-ink-600">
          {project.description}
        </p>
      </div>
    </motion.li>
  );
}

export function Projects() {
  return (
    <section
      id={SECTION_IDS.projects}
      aria-labelledby="projects-title"
      className="bg-sand-50 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="עבודות"
          titleId="projects-title"
          title="פרויקטים שביצענו"
          description="מבחר עבודות שמדגימות את סגנון העבודה ואת רמת הגמר. בקרוב יתווספו כאן תמונות לפני ואחרי מדירות שהושלמו."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-14 lg:mt-16"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
