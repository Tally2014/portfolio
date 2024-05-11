"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Modal from "react-modal";
import { useTheme } from "@/context/ThemeContext";
import ProjectsGallery from "./ProjectsGallery";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#projects");

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projects
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { theme } = useTheme();

  const openModal = () => {
    if (!modalIsOpen) {
      setModalIsOpen(true);
      document.body.classList.add("modal-open");
    }
  };
  const closeModal = () => {
    setModalIsOpen((prevState) => !prevState);
    document.body.classList.remove("modal-open");
  };

  const customStyles = {
    overlay: {
      backgroundColor:
        theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor:
        theme === "light" ? "rgba(255 ,255,255,0.8)" : "rgba(0,5 ,15,0.8)",
      transform: "translate(-50%, -50%)",
      width: "95%",
      height: "90%",
      backdropFilter: "blur(8px)",
    },
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 sm:mb-8 last:mb-0 cursor-pointer"
      onClick={openModal}
    >
      <section
        className="bg-gray-100 max-w-[42] borderBlack rounded-lg overflow-hidden sm:h-[20rem] 
      relative hover:bg-gray-200 transition sm:group-even:pl-8
       dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[24rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider
                 text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={`${title}'s Image`}
          quality={95}
          className="absolute hidden sm:block top-8 -right-[100px] w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            
            group-even:right-[initial] group-even:-left-[100px]"
        />
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
        style={customStyles}
      >
        <div className="flex flex-col items-center">
          <h2>{title}</h2>
          <button onClick={closeModal}>close</button>
          <ProjectsGallery {...{ title, description, tags, imageUrl,projects }}/>
        </div>
      </Modal>
    </motion.div>
  );
}
