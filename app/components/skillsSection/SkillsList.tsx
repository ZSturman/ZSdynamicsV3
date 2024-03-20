import { useState } from "react";
import SkillItems from "./skillItems.json";
import * as FaIcons6 from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";

interface IconMapping {
  [key: string]: React.ComponentType;
}

interface ActiveCategoryState {
  category: string | null;
  type: 'click' | 'hover' | null;
}

const SkillsList = () => {
  const [activeState, setActiveState] = useState<ActiveCategoryState>({ category: null, type: null });

  const handleEvent = (type: 'click' | 'hover', category: string) => {
    if (type === 'click') {
      setActiveState({ category, type });
    } else if (type === 'hover') {
      setActiveState({ category, type });
    }
  };

  const handleMouseLeave = () => {
    if (activeState.type !== 'click') {
      setActiveState({ category: null, type: null });
    }
  };


  const iconMapping: IconMapping = {
    FaPython: FaIcons6.FaPython,
    IoLogoCss3: IoIcons.IoLogoCss3,
    SiSass: SiIcons.SiSass,
    SiJavascript: SiIcons.SiJavascript,
    FaReact: FaIcons6.FaReact,
    SiTypescript: SiIcons.SiTypescript,
    FaCloud: FaIcons6.FaCloud,
    FaSwift: FaIcons6.FaSwift,
    SiFlask: SiIcons.SiFlask,
    SiCsharp: SiIcons.SiCsharp,
    SiJinja: SiIcons.SiJinja,
    FaHtml5: FaIcons6.FaHtml5,
    FaNodeJs: FaIcons6.FaNodeJs,
    SiOpencv: SiIcons.SiOpencv,
    SiPytorch: SiIcons.SiPytorch,
    SiTensorflow: SiIcons.SiTensorflow,
    SiPandas: SiIcons.SiPandas,
    FaBootstrap: FaIcons6.FaBootstrap,
    SiPostgresql: SiIcons.SiPostgresql,
    SiThreedotjs: SiIcons.SiThreedotjs,
    SiMysql: SiIcons.SiMysql,
    SiMongodb: SiIcons.SiMongodb,
    SiRedis: SiIcons.SiRedis,
    FaGitAlt: FaIcons6.FaGitAlt,
    FaDocker: FaIcons6.FaDocker,
    SiKubernetes: SiIcons.SiKubernetes,
    FaAws: FaIcons6.FaAws,
    FaGoogle: FaIcons6.FaGoogle,
    analytics: SiIcons.SiGoogleanalytics,
    backend: FaIcons6.FaGear,
    frontend: FaIcons6.FaPalette,
    cloud: FaIcons6.FaCloud,
    database: FaIcons6.FaDatabase,
    ai: FaIcons6.FaBrain,
    r: FaIcons.FaRProject,
  };

  const categoryList = ["Cloud, Deployment & Version Control", "Data Management & Analysis", "Core Programming", "Web Development & Frameworks"]

  return (
    <div className="skills-list-and-categories">
      <h2>Skills</h2>

      <div className="skill-category-list" onMouseLeave={handleMouseLeave}>
        {categoryList.map((category) => {
          const IconComponent = iconMapping[category];
          return (
            <div
              className={`skill-category-item ${category === activeState.category ? "active" : ""}`}
              onClick={() => handleEvent('click', category)}
              onMouseEnter={() => handleEvent('hover', category)}
            >
              {IconComponent && <IconComponent />}
              <div className="category-name">{category}</div>
            </div>
          );
        })}
      </div>


      <div className="skills-list">
        {SkillItems.map((skill) => {
          const IconComponent = iconMapping[skill.importName];
          const isHighlighted =
          activeState && activeState.category
            ? skill.category.includes(activeState.category)
            : false;
          return (
            <div className={`skill-item ${isHighlighted ? "highlighted" : ""}`}>
              {IconComponent && <IconComponent />}
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsList;
