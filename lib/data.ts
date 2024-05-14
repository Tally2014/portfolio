import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";
import project3 from "../public/project3.png";
import dev1 from "../public/projects/development/translateweatherapp1.png";
import dev2 from "../public/projects/development/sawswarningapp.png";
import dev3 from "../public/projects/development/sawswarningapp2.png";
import dev4 from "../public/projects/development/financialappwpf.png";
import graphic1 from "../public/projects/graphics/channel_ci.png";
import graphic2 from "../public/projects/graphics/nguniweather.png";
import graphic3 from "../public/projects/graphics/sports.png";
import graphic4 from "../public/projects/graphics/ar.png";
import graphic5 from "../public/projects/graphics/fullframe.png";
import graphic6 from "../public/projects/graphics/sidepanels.png";

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
    title: "Broadcasting Graphics",
    description:
      "Since the launch of Newzroom Afrika in 2019, I have been instrumental in developing and implementing live graphics. My expertise encompasses the full spectrum of graphics creation, including design, animation, and the development of dynamic templates, offering a comprehensive full-stack graphics solution.",
    tags: ["Maestro Designer", "Page editor", "News Controller"],
    imageUrl: project1,
    projects: [
      {
        image: graphic1,
        title: "Channel Identity",
        description:
          "I have been part of a dedicated team responsible for creating and evolving the visual design of Newzroom Afrika since the channel's inception, as well as its ongoing maintenance.",
      },
      {
        image: graphic2,
        title: "Weather Graphic",
        description:
          "Created visually engaging weather graphics from design, building the scene, template and integrating real-time data from SQL databases.",
      },
      {
        image: graphic3,
        title: "Sports Graphics",
        description:
          "I have designed, built, and created dynamic sports graphics that seamlessly integrate both live and historical data, providing a captivating visual experience for viewers. My expertise in crafting these graphics ensures that they are not only aesthetically pleasing but also rich in information and easy to understand.",
      },
      {
        image: graphic4,
        title: "Augmented Reality Graphics",
        description:
          "I have experience in creating augmented reality graphics for Newzroom Afrika, enhancing our broadcasts with immersive 3D visuals that bring news stories to life for our audience.",
      },
      {
        image: graphic5,
        title: "Full Frame Graphics",
        description:
          "I I excel in creating full-frame graphics that are not only detailed and informative for our viewers, but also boast a modern aesthetic with stunning animations, all while ensuring seamless interaction between the elements.",
      },
      {
        image: graphic6,
        title: "Side Panel Graphics",
        description:
          "I am proficient in creating a comprehensive suite of live graphics, including intricate side panel visuals that provide detailed bullet points, all while maintaining the seamless flow of the broadcast and enhancing viewer engagement.",
      },
    ] as const,
  },
  {
    title: "Full-Stack Development",
    description:
      "Upon Learning Programming, I have expanded my role at Newzroom Afrika to include the development of desktop applications. These applications are specifically designed to enhance the efficiency and effectiveness of live graphics data management, further contributing to the dynamic broadcasting environment.",
    tags: ["C#", "WPF", "XAML", "JSON", "API", "SQL"],
    imageUrl: project3,
    projects: [
      {
        image: dev1,
        title: "Weather Translator Desktop Application",
        description:
          "The application reads a JSON file from the weather service providers, translates the data into South African Zulu and Xhosa languages, and displays the updated information on the user interface made using WPF, which closely resembles the on-air weather graphics.",
      },
      {
        image: dev2,
        title: "SAWS Warnings Desktop Application",
        description:
          "The application retrieves weather warning data from the South African Weather Services FTP server, then formats and writes this data to a JSON file. This file is subsequently integrated with our on-air weather map, which is designed to emphasize textures based on the warnings specific to each province.",
      },
      {
        image: dev3,
        title: "SAWS Warnings Application Upgrade",
        description:
          "The SAWS Warnings Desktop Application has been reworked and upgraded to feature a user-friendly, modern interface and additional features that simplify customization.",
      },
      {
        image: dev4,
        title: "Financials Application Upgrade",
        description:
          "The user interface has been reworked to adopt a modern appearance that mirrors the channel's on-air financial graphics, utilizing C# WPF XAML",
      },
    ] as const,
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
