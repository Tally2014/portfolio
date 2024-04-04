"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/montso_dp.jpg"
              alt="Montso's pic"
              width={200}
              height={200}
              priority={true}
              quality={95}
              className="rounded-full border-[0.35rem] border-white h-24 w-24 object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ernest.</span> I'm a{" "}
        <span className="font-bold">Broadcasting Graphics Developer</span> by
        profession with <span className="font-bold">5 years</span> of experience
        and a <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 year</span> of professional experience. I
        enjoy building <span className="italic">graphics & apps</span>. My focus
        is <span className="underline">C# & JavaScript</span>.
      </motion.h1>
    </section>
  );
}
