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
import { FaAngular } from "react-icons/fa6";
import { SiJest } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiLodash } from "react-icons/si";
import { SiTestinglibrary } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { MdOutlineHttp } from "react-icons/md";

const skillsList = [
  {
    name: "Python",
    icon: <FaPython />,
    category: "Programming Languages",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    category: "Programming Languages",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Programming Languages",
  },
  {
    name: "React",
    icon: <FaReact />,
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
    name: "Sass",
    icon: <SiSass />,
    category: "Front-End Technologies",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    category: "Front-End Technologies",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    category: "Front-End Libraries/Frameworks",
  },
  {
    name: "Angular",
    icon: <FaAngular />,
    category: "Front-End Libraries/Frameworks",
  },
  {
    name: "Jest",
    icon: <SiJest />,
    category: "Testing",
  },
  {
    name: "Webpack",
    icon: <SiWebpack />,
    category: "Build Tools",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "Version Control",
  },
  {
    name: "REST APIs",
    icon: <MdOutlineHttp />,
    category: "Web Concepts",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,

    category: "Back-End Technologies",
  },
  {
    name: "Express",
    icon: <FaNodeJs />,

    category: "Back-End Technologies",
  },
  {
    name: "Django",
    icon: <SiDjango />,

    category: "Back-End Technologies",
  },
  {
    name: "Flask",
    icon: <SiFlask />,

    category: "Back-End Technologies",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,

    category: "Databases",
  },
  {
    name: "PostgreSQL",
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
    name: "GraphQL",
    icon: <SiGraphql />,

    category: "APIs",
  },
  {
    name: "Apollo GraphQL",
    icon: <SiApollographql />,

    category: "APIs",
  },
  {
    name: "Docker",
    icon: <SiDocker />,

    category: "DevOps",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,

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
    name: "Lodash",
    icon: <SiLodash />,
    category: ["utility-libraries"],
  },
  {
    name: "React Testing Library",
    icon: <SiTestinglibrary />,
    category: ["testing"],
  },
];

export default skillsList;
