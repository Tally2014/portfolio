import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <section>
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="bg-white border border-gray-500 rounded-xl px-5 py-3"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
