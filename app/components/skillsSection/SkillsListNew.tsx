import React from "react";
import SkillItems from "./skillItems.json";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
import "./skillListNew.scss";

interface IconMapping {
  [key: string]: React.ComponentType;
}

const SkillsListNew = () => {
  const iconMapping: IconMapping = {
    FaPython: FaIcons.FaPython,
    IoLogoCss3: IoIcons.IoLogoCss3,
    SiSass: SiIcons.SiSass,
    SiJavascript: SiIcons.SiJavascript,
    FaReact: FaIcons.FaReact,
    SiTypescript: SiIcons.SiTypescript,
    FaCloud: FaIcons.FaCloud,
    FaSwift: FaIcons.FaSwift,
    SiFlask: SiIcons.SiFlask,
    SiCsharp: SiIcons.SiCsharp,
    SiJinja: SiIcons.SiJinja,
    FaHtml5: FaIcons.FaHtml5,
    FaNodeJs: FaIcons.FaNodeJs,
    SiOpencv: SiIcons.SiOpencv,
    SiPytorch: SiIcons.SiPytorch,
    SiTensorflow: SiIcons.SiTensorflow,
    SiPandas: SiIcons.SiPandas,
    FaBootstrap: FaIcons.FaBootstrap,
    SiPostgresql: SiIcons.SiPostgresql,
    SiThreedotjs: SiIcons.SiThreedotjs,
    SiMysql: SiIcons.SiMysql,
    SiMongodb: SiIcons.SiMongodb,
    SiRedis: SiIcons.SiRedis,
    FaGitAlt: FaIcons.FaGitAlt,
    FaDocker: FaIcons.FaDocker,
    SiKubernetes: SiIcons.SiKubernetes,
    FaAws: FaIcons.FaAws,
    FaGoogle: FaIcons.FaGoogle,
    FaRProject: FaIcons.FaRProject,
  };
  const categoryTitles = {
    "core-programming": "Core Programming",
    "cloud-deployment-version-control": "Cloud Deployment & Version Control",
    "data-management-analysis": "Data Management & Analysis",
    "web-development-frameworks": "Web Development Frameworks",
  };

  return (
    <div className="skills-list-new">
      {Object.entries(categoryTitles).map(([categoryKey, categoryTitle]) => (
        <div className="skill-category" key={categoryKey}>
          <h3>{categoryTitle}</h3>
          {SkillItems.filter(skill => skill.category[0] === categoryKey).map((skill, index) => (
            <div key={index} className="skill-box">
              <div className="icon">{iconMapping[skill.importName] && React.createElement(iconMapping[skill.importName])}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillsListNew;