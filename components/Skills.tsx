"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData, toolsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-10">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-gray-500 rounded-xl px-5 py-3 flex gap-1 items-center
            dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={skill.imageUrl}
              alt="skill-image"
              quality={95}
              width={30}
              height={30}
            />
            {skill.title}
          </motion.li>
        ))}
      </ul>

      <SectionHeading>Tools</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {toolsData.map((tool, index) => (
          <motion.li
            key={index}
            className="bg-white border border-gray-500 rounded-xl px-5 py-3 flex gap-1 items-center 
            dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={tool.imageUrl}
              alt="skill-image"
              quality={95}
              width={30}
              height={30}
            />
            {tool.title}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
