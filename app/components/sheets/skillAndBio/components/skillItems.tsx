"use client"
import React from "react";
import { FaPython } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { SiSass } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiJest } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiFlask } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiTestinglibrary } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";



const skillsList = [
  {
    name: "Python",
    icon: <FaPython />,
    category: "Programming Languages",
  },
  {
    name: "Java Script",
    icon: <SiJavascript />,
    category: "Programming Languages",
  },
  {
    name: "Type Script",
    icon: <SiTypescript />,
    category: "Programming Languages",
  },
  {
    name: "React",
    icon: <FaReact />,
    category: "Front-End Libraries/Frameworks",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs/>,
    category: "Front-End Libraries/Frameworks",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    category: "Front-End Technologies",
  },
  {
    name: "CSS3",
    icon: <IoLogoCss3 />,
    category: "Front-End Technologies",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "Front-End Technologies",
  },
  {
    name: "Sass",
    icon: <SiSass />,
    category: "Front-End Technologies",
  },
  {
    name: "Boot strap",
    icon: <FaBootstrap />,
    category: "Front-End Technologies",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    category: "Front-End Libraries/Frameworks",
  },
  {
    name: "Jest",
    icon: <SiJest />,
    category: "Testing",
  },
  {
    name: "Web pack",
    icon: <SiWebpack />,
    category: "Build Tools",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "Version Control",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,

    category: "Back-End Technologies",
  },

  {
    name: "Flask",
    icon: <SiFlask />,

    category: "Back-End Technologies",
  },
  {
    name: "Postgre SQL",
    icon: <SiPostgresql />,

    category: "Databases",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,

    category: "Databases",
  },
  {
    name: "SQLite",
    icon: <SiSqlite />,

    category: "Databases",
  },
  {
    name: "Docker",
    icon: <SiDocker />,

    category: "DevOps",
  },

  {
    name: "React Router",
    icon: <SiReactrouter />,
    category: ["web-development-frameworks"],
  },
  {
    name: "Axios",
    icon: <SiAxios />,
    category: ["web-development-frameworks"],
  },

  {
    name: "React Testing Library",
    icon: <SiTestinglibrary />,
    category: ["testing"],
  },
];

export default skillsList;
