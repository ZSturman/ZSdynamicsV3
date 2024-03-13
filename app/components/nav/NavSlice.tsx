"use client";
import {
  usePortfolio,
  sheetSections,
  SelectedContentType,
} from "@/app/context/contextProvider";
import { motion, useTransform, useMotionValue } from "framer-motion";
import React from "react";
import NavSvgComponent from "./NavSvgComponent";

interface NavSliceProps {
  navVisible: boolean;
  setNavVisible: (navVisible: boolean) => void;
}

const NavSlice: React.FC<NavSliceProps> = ({ navVisible, setNavVisible }) => {
  const { setSelectedContent } = usePortfolio();

  const buttonVariants = {
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hidden: {
      scale: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const handleNavSliceClicked = (section: SelectedContentType) => {
    setSelectedContent(section);
    setNavVisible(!navVisible);
  };


  const Path = ({ props }: { props: any }) => {
    return (
      <>
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        {...props}
      />
      </>
    );
  };

  return (
    <motion.div
      layout
      className="relative bg-slate-300 rounded-full w-48 h-48"
      animate={navVisible ? "visible" : "hidden"}
      variants={buttonVariants}
    >

      


      

      {sheetSections.map((section, index) => (
      <motion.button
        key={section}
        initial="hidden"
        animate={navVisible ? "visible" : "hidden"}
        variants={buttonVariants}
        
        onClick={() => handleNavSliceClicked(section)}
      >
        {section}

        <motion.svg  className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2" width={150} height={150} viewBox="0 0 1080 1080" style={{ transform: `rotate(${index * 90-90}deg)` }}>
        <Path
        props={{
          d: "M881.249 154.288C890.398 143.947 889.467 128.097 878.714 119.437C778.677 38.8636 652.919 -3.58912 523.98 0.237673C395.042 4.06447 272.023 53.9007 176.941 140.265C166.72 149.548 166.73 165.425 176.476 175.205L369.885 369.29C379.631 379.07 395.381 378.965 406.221 370.414C442.435 341.845 487.049 325.476 533.592 324.095C580.135 322.714 625.641 336.408 663.486 362.778C674.814 370.672 690.543 369.843 699.691 359.502L881.249 154.288Z",
          fill: "#788300",
        }}
        />
      </motion.svg>
      </motion.button>
      ))}
    </motion.div>
    );
};

export default NavSlice;
