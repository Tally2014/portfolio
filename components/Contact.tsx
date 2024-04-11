"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:montsoernesrmoalosi@gmail.com">
          montsoernesrmoalosi@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg border-black"
          name="senderEmail"
          type="email"
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 p-4 border-black"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
      </form>
    </section>
  );
}
