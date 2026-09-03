"use client";

import { motion } from "framer-motion";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SECTION_IDS, SERVICES } from "@/data/site";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/types";

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.li
      variants={fadeUp}
      className="group flex h-full flex-col gap-5 border border-ink-800/10 bg-sand-50 p-7 transition-colors duration-300 hover:border-ink-800/30 sm:p-8"
    >
      <ServiceIcon
        name={service.icon}
        className="h-9 w-9 text-ink-700 transition-colors duration-300 group-hover:text-ink-900"
      />
      <div className="flex flex-col gap-2.5">
        <h3 className="text-xl font-semibold tracking-tight text-ink-900">
          {service.title}
        </h3>
        <p className="text-pretty text-[0.95rem] leading-relaxed text-ink-600">
          {service.description}
        </p>
      </div>
    </motion.li>
  );
}

export function Services() {
  return (
    <section
      id={SECTION_IDS.services}
      aria-labelledby="services-title"
      className="bg-sand-100 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="שירותים"
          titleId="services-title"
          title="מה אנחנו עושים"
          description="מהחלפת ריצוף נקודתית ועד שיפוץ דירה שלמה — אותו סטנדרט ביצוע ואותה שקיפות מול הלקוח."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-7"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
