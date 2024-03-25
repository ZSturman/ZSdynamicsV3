"use client";
import { AnimatePresence, MotionValue, motion, useAnimationControls, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import StageCard from "./stageCard/StageCard";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { pipelineStages } from "./pipelineStages";
import { useSearchParams, useRouter } from "next/navigation";

import UnderConstruction from "../UnderConstruction";

const WorkflowPipeline = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStageParam = searchParams.get("stage");
  const activeStage = activeStageParam !== null ? Number(activeStageParam) : 0;
  const [prevStage, setPrevStage] = useState(0);

  useEffect(() => {
    const isWorkflowContent = searchParams.get("content") === "workflow";
    if (isWorkflowContent && !activeStage) {
      router.push("?content=workflow&stage=0", { scroll: false });
    }
  }, [activeStage, searchParams, router]);

  const controls = useAnimationControls();

  useEffect(() => {
    controls.set("initial");
    controls.start("enterFromRight");
  }, [controls]);

  useEffect(() => {
    if (activeStage > prevStage) {
      controls.start("enterFromRight");
    } else if (activeStage < prevStage) {
      controls.start("enterFromLeft");
    }
  }, [activeStage, prevStage, controls]);

  const handleNextStage = () => {
    const nextStage = activeStage + 1;
    if (nextStage < pipelineStages.length) {
      setPrevStage(activeStage);
      router.push(`?content=workflow&stage=${nextStage}`, { scroll: false });
    }
  };

  const handlePrevStage = () => {
    const prevStage = activeStage - 1;
    if (prevStage >= 0) {
      setPrevStage(activeStage);
      router.push(`?content=workflow&stage=${prevStage}`, { scroll: false });
    }
  };



  const cardVariant = {
    initial: { x: "100vw" },
    enterFromRight: {
      x: ["100vw", 0],
      transition: { duration: 0.7 },
    },
    enterFromLeft: {
      x: ["-100vw", 0],
      transition: { duration: 0.7 },
    },
    exit: {
      x: [0, "-100vw"],
      transition: { duration: 0.7 },
    },
  };

  const publish = true;

  if (!publish) {
    return <UnderConstruction />;
  }

  return (
    <>
      <div className="landscape:mt-10 mt-20 md:mt-40 md:landscape:mt-20 relative">
        <AnimatePresence mode="wait">
          {pipelineStages.map((stage, index) => {
            if (index === activeStage) {
              return (
                <motion.div
                  key={stage.id}
                  variants={cardVariant}
                  initial="initial"

                   animate={
                    index > prevStage ? "enterFromRight" : "enterFromLeft"
                  }
                  exit="exit"
                >
                  <StageCard stage={stage} />

                  <div className=" mt-60 flex flex-row w-full gap-2 items-center justify-center">
                    <button
                      onClick={handlePrevStage}
                      //onClick={() => handlePrevStage(index)}
                      disabled={index === 0}
                      className={`mt-4 px-4 py-2 rounded bg-lightest-shade text-dark-shade ${
                        index === 0
                          ? "opacity-50 "
                          : "hover:bg-dark-shade hover:text-light-shade"
                      }`}
                    >
                      <FaCaretLeft />
                    </button>

                    <button
                      //onClick={() => handleNextStage(index)}
                      onClick={handleNextStage}
                      disabled={index === pipelineStages.length - 1}
                      className={`mt-4 px-4 py-2 rounded bg-lightest-shade text-dark-shade ${
                        index === pipelineStages.length - 1
                          ? "opacity-50 "
                          : "hover:bg-dark-shade hover:text-light-shade"
                      }`}
                    >
                      <FaCaretRight />
                    </button>
                  </div>
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>

        {/*   <h2>Tools</h2>
        <ul>
          <li>json-server</li>
          <li>wireframes</li>
          <li>ai tools</li>
          <li>apis</li>
          <li>security</li>
          <li>web3</li>
        </ul> */}
      </div>
    </>
  );
};

export default WorkflowPipeline;
