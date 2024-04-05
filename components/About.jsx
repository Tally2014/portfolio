"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a seasoned professional in the{" "}
        <span className="font-medium">Television industry</span> at{" "}
        <span className="font-medium">Newzroom Afrika</span>, I embraced my
        passion for programming by diving into coding bootcamps where I
        learned👨‍💻 <span className="font-medium">C# and web development</span>.
        This knowledge empowered me to create applications for{" "}
        <span className="italic">TV live graphics</span>. I love comming up with
        new ideas that are <span className="underline">innovative</span>,
        enhances my work <span className="underline">efficiency</span> and
        simplifying complex tasks. My core programming stack includes{" "}
        <span className="font-medium">
          C#, WPF, .NET MAUI, JavaScript, React, Node.js, and MongoDB
        </span>
        . Professionally, I use tools like{" "}
        <span className="font-medium">
          Avid Maestro Designer, Avid Page Editor, Avid News Controller, Viz
          Artist and Adobe Creative Suite
        </span>
        . Committed to growth, I embrace my ability to quickly learn new
        technologies💪.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching Anime, and playing with my nephew. I also enjoy{" "}
        <span className="font-medium">learning new things</span>🤩.
      </p>
    </motion.section>
  );
}
