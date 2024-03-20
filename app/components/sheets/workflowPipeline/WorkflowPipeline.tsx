"use client";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";

type PipelineStageType = {
  id: number;
  name: string;
  description: string;
  image: string;
  items: string[];
};

const pipelineStages: PipelineStageType[] = [
  {
    id: 1,
    name: "Requirement Analysis",
    description: "Gather and understand the requirements of the project",
    image: "requirementAnalysis",
    items: ["Objective", "Audience", "Function", "Timeline"],
  },
  {
    id: 2,
    name: "Design",
    description: "Create wireframes and prototypes",
    image: "design",
    items: ["Wireframe", "Prototyping", "Review and Approval"],
  },
  {
    id: 3,
    name: "Development",
    description: "Set up and version control",
    image: "development",
    items: ["Set up", "Version Control"],
  },
  {
    id: 4,
    name: "Testing",
    description: "Unit, Integration, Cross Browser, Cross Device, Performance",
    image: "testing",
    items: [
      "Unit",
      "Integration",
      "Cross Browser",
      "Cross Device",
      "Performance",
    ],
  },
  {
    id: 5,
    name: "Review",
    description: "Approval and Feedback",
    image: "review",
    items: ["Approval", "Feedback"],
  },
  {
    id: 6,
    name: "Deployment",
    description: "Staging, Production, DNS, Web Hosting, Database Setup",
    image: "deployment",
    items: ["Staging", "Production", "DNS", "Web Hosting", "Database Setup"],
  },
  {
    id: 7,
    name: "Post Launch",
    description: "Maintenance, Support, Analytics, SEO",
    image: "postLaunch",
    items: ["Maintenance", "Support", "Analytics", "SEO"],
  },
];

const WorkflowPipeline = () => {
  const controls = useAnimationControls();
  const [activeStage, setActiveStage] = useState(0);
  const [stages, setStages] = useState<PipelineStageType[]>(pipelineStages);


  useEffect(() => {
    controls.set("initial");
  }, [controls]);

  const handleNextStage = () => {
    setActiveStage((prevStage) => prevStage + 1);
  };

  const startVariant = {
    initial: { opacity: 1, scale: 1 },
    enter: { opacity: 1, scale: 1, transition: { duration: 0.5 }, type: "spring", stiffness: 260, damping: 20},
    exit: { opacity: 0, scale: 0.8 , transition: { duration: 0.5 }, type: "spring", stiffness: 260, damping: 20},
  }

  const cardVariant = {
    initial: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1, transition: { duration: 2, staggerChildren: 0.4 }, type: "spring", stiffness: 260, damping: 20},
    exit: { opacity: 0, scale: 0.8 , transition: { duration: 2 }, type: "spring", stiffness: 260, damping: 20},
  }

  const cardItemsVariant = {
    initial: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1, transition: { duration: 0.5 }, type: "spring", stiffness: 260, damping: 20},
    exit: { opacity: 0, scale: 0.8 , transition: { duration: 0.5 }, type: "spring", stiffness: 260, damping: 20},
  }




  return (
    <>
      <h1 className="text-3xl">Workflow Pipeline</h1>
      <div className="mt-40 relative">
        <AnimatePresence>
          {activeStage === 0 ? (
            <motion.button
              key="start"
              onClick={handleNextStage}
              variants={startVariant}
              
              animate={controls}
              exit="exit"
              className="text-9xl border-4 border-light-shade rounded-full p-10 bg-dark-accent text-light-shade"
            >
              <FaPlay className="text-light-shade" />
            </motion.button>
          ) : null}

          {pipelineStages.map((stage, index) => {
            if (index === activeStage - 1) {
              return (
                <motion.div
                  key={stage.id}
                  variants={cardVariant}
                  animate={controls}
                  exit="exit"
                  className="absolute top-0 w-full h-full flex flex-col items-center justify-center"
                >
                  <motion.h2 variants={cardItemsVariant}>{stage.name}</motion.h2>
                  <motion.p variants={cardItemsVariant}>{stage.description}</motion.p>
                  <motion.ul variants={cardItemsVariant}>
                    {stage.items.map((item, index) => (
                      <motion.li key={index}>{item}</motion.li>
                    ))}
                  </motion.ul>
                  <motion.img
                    src={`/images/${stage.image}.svg`}
                    alt={stage.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  />
                  <button
                    onClick={handleNextStage}
                    className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
                  >
                    Next
                  </button>
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>

      

{/*       <h2>Tools</h2>
      <ul>
        <li>json-server</li>
        <li>wireframes</li>
        <li>ai tools</li>
        <li>apis</li>
        <li>security</li>
        <li>web3</li>
      </ul> */}
    </>
  );
};

export default WorkflowPipeline;
