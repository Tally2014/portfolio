import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/corpcomment.png";
import rmtdevImg from "../public/rmtdev.png";
import wordanalyticsImg from "../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Broadcasting Graphics Developer",
    location: "Newzroom Africa",
    description:
      "I joined NgwatoNkosi Group to launch the news channel. I specialize in building logic for dynamic live graphics.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  },
  {
    title: "Full-Stack Developer bootcamps",
    location: "Udemy",
    description:
      "I upskilled by enrolling in online courses where I mainly learned C# and JavaScript. I earned Certificates in Mircrosoft C#, Git&Github bootcamp and Web Development bootcamp.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "NgwatoNkosi Group",
    description:
      "I began creating desktop applications with C# to oversee our live graphics. These applications fetch data from an API to integrate into the graphics and include features for translating content into the native language of our news channels.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { title: "C#", imageUrl: "/icons/skills/csharp.png" },
  { title: "WPF", imageUrl: "/icons/skills/wpf.png" },
  { title: ".NET MAUI", imageUrl: "/icons/skills/maui.png" },
  { title: "RestfulAPI", imageUrl: "/icons/skills/rest.png" },
  { title: "HTML", imageUrl: "/icons/skills/html.png" },
  { title: "CSS", imageUrl: "/icons/skills/css.png" },
  { title: "JavaScript", imageUrl: "/icons/skills/js.png" },
  { title: "React", imageUrl: "/icons/skills/react.png" },
  { title: "Node.js", imageUrl: "/icons/skills/node.png" },
  { title: "Git", imageUrl: "/icons/skills/git.png" },
  { title: "MongoDB", imageUrl: "/icons/skills/mongodb.png" },
  { title: "Express", imageUrl: "/icons/skills/express.png" },
  { title: "Tailwind", imageUrl: "/icons/skills/tailwind.png" },
  { title: "Framer Motion", imageUrl: "/icons/skills/framer.png" },
] as const;

export const toolsData = [
  { title: "Maestro Designer", imageUrl: "/icons/applications/avid.png" },
  { title: "Maestro Page editor", imageUrl: "/icons/applications/avid.png" },
  { title: "Maestro Controller", imageUrl: "/icons/applications/avid.png" },
  { title: "Viz Artist", imageUrl: "/icons/applications/viz.png" },
  { title: "Photoshop", imageUrl: "/icons/applications/ps.png" },
  { title: "Illustrator", imageUrl: "/icons/applications/ai.png" },
  { title: "After Effects", imageUrl: "/icons/applications/ae.png" },
  { title: "Premier Pro", imageUrl: "/icons/applications/pr.png" },
  { title: "Adobe Animate", imageUrl: "/icons/applications/an.png" },
  { title: "Adobe XD", imageUrl: "/icons/applications/xd.png" },
  { title: "Figma", imageUrl: "/icons/applications/figma.png" },
  { title: "Visual Code", imageUrl: "/icons/applications/vsc.png" },
  { title: "Visual Studio Code", imageUrl: "/icons/applications/mvs.png" },
  { title: "Office", imageUrl: "/icons/applications/office.png" },
  { title: "Excell", imageUrl: "/icons/applications/excel.png" },
] as const;
