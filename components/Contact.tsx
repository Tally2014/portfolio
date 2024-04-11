"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <section id="contact" ref={ref}>
      <SectionHeading>Contact</SectionHeading>
    </section>
  );
}
