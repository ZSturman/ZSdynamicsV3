"use client";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./sheets/contact/Contact";
import Studio from "./sheets/studio/Studio";
import SkillsAndBio from "./sheets/skillAndBio/SkillsAndBio";
import { useSearchParams } from "next/navigation";
import WorkflowPipeline from "./sheets/workflowPipeline/WorkflowPipeline";
import HomePage from "./sheets/homePage/HomePage";
import WrongLocation from "./sheets/wrongLocation/WrongLocation";

interface ContentSectionProps {}

const ContentSection: React.FC<ContentSectionProps> = ({}) => {
  const searchParams = useSearchParams();

  const hasContent = searchParams.has("content");
  const selectedContent = searchParams.get("content");
  const pages = ["bio", "studio", "workflow", "contact"];

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


  return (
    <>
      {/* Content */}
      <div className="min-h-screen bg-light-accent overflow-x-hidden">
        <AnimatePresence mode="wait">
          {selectedContent === "bio" && (
            /* Bio Page */
            <motion.div
              variants={pageRevealVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-dark-shade w-full flex flex-col justify-start items-center"
              key={"bio"}
            >
              <SkillsAndBio />
            </motion.div>
          )}

          {selectedContent === "studio" && (
            /* Studio Page */
            <motion.div
              variants={pageRevealVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-dark-shade w-full flex flex-col justify-start items-center"
              key={"studio"}
            >
              <Studio />
            </motion.div>
          )}

          {selectedContent === "workflow" && (
            /* workflow Page */
            <motion.div
              variants={pageRevealVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-dark-shade w-full flex flex-col justify-start items-center"
              key={"workflow"}
            >
              <WorkflowPipeline />
            </motion.div>
          )}

          {selectedContent === "contact" && (
            /* Contact Page */
            <motion.div
              variants={pageRevealVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-dark-shade w-full flex flex-col justify-start items-center"
              key={"contact"}
            >
              <Contact />
            </motion.div>
          )}

          {!hasContent ||
            (!pages.includes(selectedContent ?? "") && (
              /* Wrong Location */
              <motion.div
                variants={pageRevealVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full w-full flex flex-col justify-start items-center"
                key={"default"}
              >
                <WrongLocation />
              </motion.div>
            ))}

          {!hasContent && (
              /* Home Page */
              <motion.div
                variants={pageRevealVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className=" w-full flex flex-col justify-start items-center"
                key={"default"}
              >
                <HomePage />
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ContentSection;
