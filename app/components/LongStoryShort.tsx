"use client";
import { usePortfolio } from "../context/contextProvider";
import { motion } from "framer-motion";

const LongStoryShort = () => {
  const { justTheHighlights, setJustTheHighlights } = usePortfolio();

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      <div
        className="w-full h-[40px] bg-slate-300 flex rounded-xl cursor-pointer items-center p-1 relative"
        style={{
          justifyContent: justTheHighlights ? "flex-start" : "flex-end",
        }}
        onClick={() => setJustTheHighlights(!justTheHighlights)}
      >
        <motion.div
          className="w-1/2 h-full rounded-xl"
          style={{ backgroundColor: "#333" }}
          layout
          transition={spring}
          whileHover={{ backgroundColor: "#555", scale: 1.1 }}
        />

        <div className="absolute flex flex-row w-full justify-evenly items-center ">

        <h1
          className={`${
            justTheHighlights ? "text-white" : "text-black"
          }`}
        >
          Give me the gist
        </h1>
        <h1
          className={` px-5 ${
            !justTheHighlights ? "text-white" : "text-black"
          }`}
        >
          I&apos;ve got time
        </h1>
        </div>
      </div>
    </div>
  );
};

export default LongStoryShort;
