import {
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiVisualstudiocode,
  SiJupyter,
  SiFramer,
  SiFlutter,
  SiMysql,
} from "react-icons/si";
import { DiHtml5, DiJava, DiPython, DiBootstrap } from "react-icons/di";
import { TechStackItemType } from "@/types/TechStackItem";

export const techStacks: TechStackItemType[] = [
  {
    name: "HTML",
    icon: DiHtml5,
    className: "text-orange-500 text-md lg:text-2xl",
  },
  {
    name: "CSS",
    icon: SiCss3,
    className: "text-blue-500 text-md lg:text-2xl",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "text-yellow-500 text-md lg:text-2xl",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    className: "text-orange-400 text-md lg:text-2xl",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    className: "text-red-600 text-md lg:text-2xl",
  },
  {
    name: "PHP",
    icon: SiPhp,
    className: "text-blue-700 text-md lg:text-2xl",
  },
  {
    name: "React",
    icon: SiReact,
    className: "text-cyan-400 text-md lg:text-2xl",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    className: "text-teal-400 text-md lg:text-2xl",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    className: "text-black text-md lg:text-2xl",
  },
  {
    name: "Java",
    icon: DiJava,
    className: "text-red-800 text-md lg:text-2xl",
  },
  {
    name: "Python",
    icon: DiPython,
    className: "text-blue-600 text-md lg:text-2xl",
  },
  {
    name: "Bootstrap",
    icon: DiBootstrap,
    className: "text-info text-md lg:text-2xl",
  },
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
    className: "text-blue-600 text-md lg:text-2xl",
  },
  {
    name: "Jupyter Notebook",
    icon: SiJupyter,
    className: "text-orange-600 text-md lg:text-2xl",
  },
  {
    name: "Framer",
    icon: SiFramer,
    className: "text-red-600 text-md lg:text-2xl",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    className: "text-blue-600 text-md lg:text-2xl",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    className: "text-yellow-600 text-md lg:text-2xl",
  },
];
