"use client";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import StageCard from "./stageCard/StageCard";

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
    image: "requirementAnalysis.webp",
    items: ["Objective", "Audience", "Function", "Timeline"],
  },
  {
    id: 2,
    name: "Design",
    description: "Create wireframes and prototypes",
    image: "design.webp",
    items: ["Wireframe", "Prototyping", "Review and Approval"],
  },
  {
    id: 3,
    name: "Development",
    description: "Set up and version control",
    image: "development.webp",
    items: ["Set up", "Version Control"],
  },
  {
    id: 4,
    name: "Testing",
    description: "Unit, Integration, Cross Browser, Cross Device, Performance",
    image: "testing.webp",
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
    image: "review.webp",
    items: ["Approval", "Feedback"],
  },
  {
    id: 6,
    name: "Deployment",
    description: "Staging, Production, DNS, Web Hosting, Database Setup",
    image: "deployment.webp",
    items: ["Staging", "Production", "DNS", "Web Hosting", "Database Setup"],
  },
  {
    id: 7,
    name: "Post Launch",
    description: "Maintenance, Support, Analytics, SEO",
    image: "postLaunch.webp",
    items: ["Maintenance", "Support", "Analytics", "SEO"],
  },
];

const WorkflowPipeline = () => {
  const controls = useAnimationControls();
  const [activeStage, setActiveStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    controls.set("initial");
    controls.start("enter");
  }, [controls]);

  const handleNextStage = () => {
    setIsAnimating(true);
    controls.start("enter").then(() => setIsAnimating(false));
    setActiveStage((prevStage) => prevStage + 1);
    setIsAnimating(false);
  };

  const handlePrevStage = () => {
    setIsAnimating(true);
    controls.start("exit").then(() => setIsAnimating(false));
    setActiveStage((prevStage) => prevStage - 1);
    setIsAnimating(false);
  };

  const startVariant = {
    initial: { x: 100, opacity: 0, scale: 0.8 },
    enter: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 },
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  const cardVariant = {
    initial: { opacity: 0, scale: 0.8, x: 100 },
    enter: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, staggerChildren: 0.4 },
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: -100,
      transition: { duration: 1 },
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };
  return (
    <>
      <h1 className="text-3xl">Workflow Pipeline</h1>

      <div className="mt-40 relative">
        <AnimatePresence mode="wait">
          {activeStage === 0 ? (
            <motion.button
              key="start"
              onClick={handleNextStage}
              variants={startVariant}
              animate={controls}
              exit="exit"
              className="text-9xl border-4 border-light-shade rounded-full p-10 bg-dark-accent text-light-shade z-20"
            >
              {activeStage}
              <FaPlay className="text-light-shade" />
            </motion.button>
          ) : null}
          {pipelineStages.map((stage, index) => {
            if (index === activeStage - 1) {
              return (
                <motion.div
                  key={stage.id}
                  variants={cardVariant}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <StageCard stage={stage} />

                  
                  <button
                    onClick={handlePrevStage}
                    disabled={isAnimating}
                    className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
                  >
                    Prev
                  </button>
                  <button
                    onClick={handleNextStage}
                    disabled={isAnimating}
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

        <h2>Tools</h2>
        <ul>
          <li>json-server</li>
          <li>wireframes</li>
          <li>ai tools</li>
          <li>apis</li>
          <li>security</li>
          <li>web3</li>
        </ul>
      </div>
    </>
  );
};

export default WorkflowPipeline;
