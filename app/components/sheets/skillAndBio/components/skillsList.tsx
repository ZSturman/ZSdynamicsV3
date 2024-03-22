"use client"
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import SkillCard from "./skillCard";
import skillsList from "./skillItems";
import useMeasure from "react-use-measure";

const SkillsListScrolling = () => {
  const [ref, { width }] = useMeasure();
  const controls = useAnimation();

  //const FAST_DURATION = 25;
//  const SLOW_DURATION = 45;
  const totalWidth = -width/3-8;

  const containerVariants = {
    initial: { x: 0 },
    animate: { 
      x: -totalWidth,
      transition: {
        ease: "linear",
        duration: 25,
        repeat: Infinity,
        repeatDelay: 0,
        
      },
    },
  };
  
  useEffect(() => {
    controls.start("animate");
  }, [controls, totalWidth]);
/* 
  const handleHoverStart = () => {
    controls.start({
      x: -totalWidth,
      transition: { 
        ease: "linear",
        duration: SLOW_DURATION,
        repeat: Infinity,
        repeatDelay: 0,
  
      },
    });
  }; */

/*   const handleHoverEnd = () => {
    controls.start({
      x: -totalWidth,
      transition: { 
        ease: "linear",
        duration: FAST_DURATION,
        repeat: Infinity,
        repeatDelay: 0,

      },
    });
  }; */

  return (
    <div>
      <motion.div
        className="left-0 flex flex-row gap-4 my-2"
        ref={ref}
        variants={containerVariants}
        initial="initial"
        animate={controls}
        transition={{ repeatType: "loop" }}

      >
        {[...skillsList, ...skillsList, ...skillsList].map((skill, idx) => (
          <SkillCard key={idx} name={skill.name} category={skill.category} icon={skill.icon} />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsListScrolling;
