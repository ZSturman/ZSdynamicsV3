import Image from "next/image";
import { FC, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { PipelineStageType } from "@/app/components/sheets/workflowPipeline/pipelineStages";

interface StageCardProps {
  stage: PipelineStageType;
}

const StageCard: FC<StageCardProps> = ({ stage }) => {
  const [containerTransform, setContainerTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const controls = useAnimationControls();

  const onMouseEnter = () => {
    controls.start("isHovering");
    setContainerTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    controls.start("initial");
    setContainerTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  const fgVariant = {
    initial: {
      scale: 1,
      y: 0,
    },
    isHovering: {
      scale: 1.1,
      y: [-10, -5],
      transition: {
        y: {
          delay: 0.2,
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };
  const fgShadowVariant = {
    initial: {
      scale: 0,
      opacity: 0,
      filter: "blur(0px)",
    },
    isHovering: {
      scale: 1,
      opacity: [.8, 1],
      filter: ["blur(10px)", "blur(5px)"],
      y: [5, 0],
      transition: {
        opacity: {
          delay: 0.2,
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
        },
        y: {
          delay: 0.2,
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
        },
        filter: {
          delay: 0.2,
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };

  return (
    <motion.div
      className="relative w-full h-full  mt-48 group flex items-center justify-center cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ y:20, transition: { duration: 0.5, delay: .2 }}}
    >
      <div className="relative ">
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0deg)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              transform: containerTransform,
            }}
            className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl transition duration-700 overflow-hidden"
          >
            <div className="h-96 w-96 relative my-10">
              <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center z-10">
                <div className="w-60 h-60 rounded-lg shadow-lg relative">
                  <Image
                    src={`/workflowPipeline/${stage.imageBg}`}
                    alt={stage.name}
                    fill
                    className="rounded-lg"
                  />
                  <motion.div className="pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 transition duration-100"></motion.div>
                </div>

                <div className="w-full h-1/2 flex flex-col justify-between">
                  <h3 className="text-center text-3xl">{stage.name}</h3>
                  <p className="text-center text-xl">{stage.description}</p>
                  <ul className="flex flex-row justify-evenly">
                    {stage.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 w-full h-80 bg-slate-400 rounded-md shadow-lg transition-shadow duration-300 ease-in-out group-hover:shadow-[0_20px_16px_rgb(0_0_0/0.4)]" />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -top-48 flex justify-center z-10 w-60 h-60"
        variants={fgVariant}
        animate={controls}
      >
        <div className="relative w-full h-full">
        <Image src={`/ZSdV3Svgs/svgs/${stage.imageFg}`} alt={stage.name} fill />
        <motion.div
          className="absolute w-full bottom-0 h-2 translate-x-1/2 bg-gradient-to-r from-transparent via-black to-transparent "
          variants={fgShadowVariant}
          animate={controls}
          initial="initial"
        />
        </div>


      </motion.div>
    </motion.div>
  );
};

export default StageCard;
