import React, { useRef } from "react";
import LabBox from "./LabBox";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface LabCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    link: string;
  };
}

const LabCard: React.FC<LabCardProps> = ({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="w-96 h-96 ">
      <div ref={ref}>
        <div className="w-48 flex flex-col justify-between h-full ">
          <p>Project Description</p>
          
        </div>
        <LabBox>
          <div>
            <Image
              src="/next.svg"
              alt="Project Image"
              width={200}
              height={200}
            />
            <Image
              src="/vercel.svg"
              alt="Project Image"
              width={200}
              height={200}
            />
          </div>
        </LabBox>
      </div>
      <motion.div style={{ y }}>
      <motion.h1 className="text-3xl" >{project.title}</motion.h1>
      <motion.button className="bg-slate-300 rounded-lg p-2 text-black" style={{ y }}>
        {project.link}
      </motion.button>
      </motion.div>
    </section>
  );


};

export default LabCard;
