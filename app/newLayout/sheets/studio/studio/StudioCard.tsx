import React, { useRef } from "react";
import StudioBox from "./StudioBox";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface StudioCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    link: string;
  };
}

const StudioCard: React.FC<StudioCardProps> = ({ project }) => {
  const ref = useRef(null);

  return (
    <>

    <section className="w-96 h-96 ">
      <div ref={ref}>
        <div className="w-48 flex flex-col justify-between h-full ">
          <p>Project Description</p>
        </div>
        <StudioBox>
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
        </StudioBox>
      </div>
      <motion.div>
        <motion.h1 className="text-3xl">{project.title}</motion.h1>

        <button>{project.link}</button>
      </motion.div>
    </section> 
    </>
  );
};

export default StudioCard;
