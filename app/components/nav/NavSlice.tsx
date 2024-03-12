"use client";
import {
  usePortfolio,
  sheetSections,
  SelectedContentType,
} from "@/app/context/contextProvider";
import { motion, useTransform, useMotionValue } from "framer-motion";
import React from "react";

interface NavSliceProps {
  navVisible: boolean;
  setNavVisible: (navVisible: boolean) => void;
}

const NavSlice: React.FC<NavSliceProps> = ({ navVisible, setNavVisible }) => {
  const { setSelectedContent } = usePortfolio();

  const expandedSize = 240;
  const collapsedSize = 20;
  const containerSize = navVisible ? expandedSize : collapsedSize;
  const buttonSize = 40;
  const radius = (expandedSize - buttonSize) / 2;

  const buttonVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hidden: {
      opacity: 0,
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

  const calculateButtonPosition = (index: number) => {
    const totalItems = sheetSections.length;
    // Convert degrees to radians: Math.PI / 180 * (index * (360 / totalItems))
    const angle = (Math.PI / 180) * (index * (360 / totalItems));
    // Assuming the center of the circle is at (radius, radius)
    const x = radius * Math.cos(angle) + radius;
    const y = radius * Math.sin(angle) + radius;
    return { top: `${y}px`, left: `${x}px` };
  };
  return (
    <motion.div
      layout
      className="relative bg-slate-300 rounded-full"
      style={{ width: containerSize + "px", height: containerSize + "px" }}
    >
      {sheetSections.map((section, index) => (
        <motion.button
          key={section}
          initial="hidden"
          animate={navVisible ? "visible" : "hidden"}
          variants={buttonVariants}
          className="flex justify-center items-center text-dark-shade bg-main-brand p-2 rounded-full absolute origin-center z-10"
          style={calculateButtonPosition(index)}
          onClick={() => handleNavSliceClicked(section)}
        >
          {section}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default NavSlice;
