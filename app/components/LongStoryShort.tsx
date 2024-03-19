"use client";
import { motion } from "framer-motion";

interface LongStoryShortProps {
  context: boolean;
  setContext: (value: boolean) => void;
}

const LongStoryShort: React.FC<LongStoryShortProps> = ({context, setContext}) => {

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const toggleContext = () => {
    setContext(!context);
  }

  return (
    <div className="relative w-96 flex items-center justify-center">
      <div
        className="w-full h-[20px] bg-dark-shade flex rounded-xl cursor-pointer items-center relative border-2 border-dark-shade"
        style={{
          justifyContent: !context ? "flex-start" : "flex-end",
        }}
        onClick={toggleContext}
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
            !context ? "text-white" : "text-black"
          }`}
        >
          Give me the gist
        </h1>
        <h1
          className={` px-5 ${
            context ? "text-white" : "text-black"
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
