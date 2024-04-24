"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm an experienced professional in the{" "}
        <span className="font-medium">Television industry</span> at{" "}
        <span className="font-medium">Newzroom Afrika</span> with
        <span className="font-medium"> 5 years </span>
        consistant, I build interactive live graphics. My strength lies in the
        technical aspect wheares I oversee broadcasting graphics logic and
        program advanced graphics templates. I have also expanded my skills by
        enrolling in coding courses where I learned{" "}
        <span className="font-medium">C# and web development</span>. This
        knowledge empowered me to create applications for{" "}
        <span className="italic">live graphics</span>. I'm passionate about
        about generating <span className="underline">innovative</span> ideas
        that streamline tasks and enhance{" "}
        <span className="underline">efficiency</span>. My programming stack
        includes{" "}
        <span className="font-medium">
          C#, WPF, .NET MAUI, JavaScript, React, Node.js, and SQL Databases
        </span>
        . I'm dedicated to continual learning and I easily adapt to new
        technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching Anime, and spending time with my family. I also
        enjoy <span className="font-medium">learning new things</span>🤩.
      </p>
    </motion.section>
  );
}
