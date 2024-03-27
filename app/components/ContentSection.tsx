"use client";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./sheets/contact/Contact";
import Studio from "./sheets/studio/Studio";
import SkillsAndBio from "./sheets/skillAndBio/SkillsAndBio";
import { useSearchParams } from "next/navigation";
import WorkflowPipeline from "./sheets/workflowPipeline/WorkflowPipeline";
import HomePage from "./sheets/homePage/HomePage";
import WrongLocation from "./sheets/wrongLocation/WrongLocation";
import Header from "./landingPage/header/Header";
import { useEffect, useRef } from "react";

interface ContentSectionProps {
  controls: any;
}

const ContentSection: React.FC<ContentSectionProps> = ({ controls }) => {
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  const hasContent = searchParams.has("content");
  const selectedContent = searchParams.get("content");
  const pages = ["bio", "studio", "contact", "home"];

  const pageRevealVariants = {
    hidden: { x: "100vw" },
    visible: {
      x: 0,
      transition: { duration: 0.25 },
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.25 },
    },
  };

  const contentSheets = [
    Header, SkillsAndBio, Studio, Contact
  ]

  return (
    <>
      <div className="flex flex-row h-full overflow-x-scroll snap-x snap-mandatory items-center justify-start" style={{ width: `calc(100vw * ${contentSheets.length})`, overflowX: "scroll" }}>
        {contentSheets.map((Sheet, index) => (
          <div key={index} className="w-screen flex-shrink-0 snap-center" style={{ width: '100vw' }}>
            <Sheet controls={controls} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentSection;



/*   return (
    <>
{/* 
      <AnimatePresence mode="wait">
        {selectedContent === "bio" && (
          <motion.div
            variants={pageRevealVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={"bio"}
          >
            <SkillsAndBio />
          </motion.div>
        )}

        {selectedContent === "studio" && (
       
          <motion.div
            variants={pageRevealVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={"studio"}
          >
            <Studio />
          </motion.div>
        )}

        {selectedContent === "workflow" && (
          
          <motion.div
            variants={pageRevealVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={"workflow"}
          >
            <WorkflowPipeline />
          </motion.div>
        )}

        {selectedContent === "contact" && (
          
          <motion.div
            variants={pageRevealVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={"contact"}
          >
            <Contact />
          </motion.div>
        )}

        {!hasContent ||
          (!pages.includes(selectedContent ?? "") && (
            
            <motion.div
              variants={pageRevealVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={"default"}
            >
              <WrongLocation />
            </motion.div>
          ))}

        {!hasContent ||
          (selectedContent === "home" && (
            
            <motion.div
              variants={pageRevealVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={"home"}
            >
              <Header controls={controls} />
            </motion.div>
          ))}
      </AnimatePresence> */