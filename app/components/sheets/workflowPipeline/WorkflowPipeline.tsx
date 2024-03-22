"use client";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import StageCard from "./stageCard/StageCard";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { pipelineStages } from "./pipelineStages";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

const WorkflowPipeline = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStage = searchParams.get("stage");
  const [prevStage, setPrevStage] = useState(0);

  const isValidStage = pipelineStages.some(
    (stage) => stage.id.toString() === activeStage
  );

  useEffect(() => {
    const isWorkflowContent = searchParams.get("content") === "workflow";
    if (isWorkflowContent && (!activeStage || !isValidStage)) {
      router.push("?content=workflow&stage=0", { scroll: false });
    }
  }, [activeStage, isValidStage, searchParams, router]);

  const controls = useAnimationControls();

  useEffect(() => {
    controls.set("initial");
    controls.start("enterFromRight");
  }, [controls]);

  const handleNextStage = (index: number) => {
    setPrevStage(index);
    const currentSearchParams = new URLSearchParams(window.location.search);
    const nextPage = (index + 1).toString();
    currentSearchParams.set("stage", nextPage);
    router.push(`?${currentSearchParams.toString()}`, { scroll: false });
  };

  const handlePrevStage = (index: number) => {
    setPrevStage(index);
    const currentSearchParams = new URLSearchParams(window.location.search);
    const prevPage = (index - 1).toString();
    currentSearchParams.set("stage", prevPage);
    router.push(`?${currentSearchParams.toString()}`, { scroll: false });
    
  };

  const cardVariant = {
    initial: { x: "100vw" },
    enterFromRight: {
      x: ["100vw", 0],
      transition: { duration: .7 },
    },
    enterFromLeft: {
      x: ["-100vw", 0],
      transition: { duration: .7 },
    },
    exitToLeft: {
      x: [0, "-100vw"],
      transition: { duration: .7 },
    },
    exitToRight: {
      x: [0, "100vw"],
      transition: { duration: .7 },
    },
  };

  return (
    <>
      <div className="mt-40 relative">
        <AnimatePresence mode="wait">
          {pipelineStages.map((stage, index) => {
            if (index.toString() === activeStage) {
              return (
                <motion.div
                  key={stage.id}
                  variants={cardVariant}
                  initial="initial"
                  animate={index > prevStage ? "enterFromRight" : "enterFromLeft"}
                  exit={index > prevStage ? "exitToRight" : "exitToLeft"}
                >
                  
                  <StageCard stage={stage} />

                  <div className=" mt-60 flex flex-row w-full gap-2 items-center justify-center">
                    <button
                      onClick={() => handlePrevStage(index)}
                      disabled={index === 0}
                      className={`mt-4 px-4 py-2 rounded bg-light-shade text-dark-shade ${
                        index === 0
                          ? "opacity-50 "
                          : "hover:bg-dark-shade hover:text-light-shade"
                      }`}
                    >
                      <FaCaretLeft />
                    </button>

                    <button
                      onClick={() => handleNextStage(index)}
                      disabled={index === pipelineStages.length - 1}
                      className={`mt-4 px-4 py-2 rounded bg-light-shade text-dark-shade ${
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

/* 


                <motion.div
                  key={stage.id}
                  variants={pageRevealVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div
                    className="relative z-50  cursor-pointer"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    <div
                      style={{
                        perspective: "1000px",
                        transform: "rotateX(70deg) translateZ(0deg)",
                      }}
                      className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div
                        style={{
                          transform: transform,
                        }}
                        className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl transition duration-700 overflow-hidden"
                      >
                        <div className=" relative z-10 ">
                          <StageCard stage={stage} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" mt-60 flex flex-row w-full gap-2 items-center justify-center">
                    {index > 0 && (
                      <button
                        onClick={() => handlePrevStage(index)}
                        className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
                      >
                        <FaCaretLeft />
                      </button>
                    )}

                    {index < pipelineStages.length - 1 && (
                      <button
                        onClick={() => handleNextStage(index)}
                        className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
                      >
                        <FaCaretRight />
                      </button>
                    )}
                  </div>
                </motion.div>
                
                
                */
