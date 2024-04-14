"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import SubmitBtn from "./SubmitBtn";
import { sendEmail } from "@/actions/sendEmails";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: false,
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:montsoernesrmoalosi@gmail.com">
          montsoernesrmoalosi@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          console.log("Running on client");
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));

          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 p-4 borderBlack rounded-lg"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
