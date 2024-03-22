import { motion, useAnimationControls } from "framer-motion";
import { useTheme } from "../context/themeContext";

interface LongStoryShortProps {
  context: boolean;
  setContext: (value: boolean) => void;
}

const LongStoryShort: React.FC<LongStoryShortProps> = ({
  context,
  setContext,
}) => {

  const { theme } = useTheme();
  

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  }

  const toggleButtonVariant = {
    whileHover: {
      scale: 1.1,
    },
    exit: {
      x: 0,
      scale: 1
    },
    transition: spring
  };

  const toggleContext = () => {
    setContext(!context);
  };

  return (
    <div className="relative w-full sm:w-72 md:w-96 flex items-center justify-center">
      <motion.button
        className={`w-full mx-5 lg:mx-0 h-[28px] flex rounded-md md:rounded-xl items-center relative border-2 ${theme === "light" ? "border-slate-400 bg-slate-300" :  "border-slate-300 bg-slate-200"} bg-opacity-50 overflow-visible shadow-inner shadow-slate-300`}
        style={{
          justifyContent: !context ? "flex-start" : "flex-end",
        }}
        onClick={toggleContext}
      >
        <motion.div
          className={`w-1/2 h-full rounded-md md:rounded-xl hover:bg-dark-accent bg-light-accent text-dark-shade shadow-md hover:shadow-lg`}
          layout
          variants={toggleButtonVariant}
          whileHover={"whileHover"}
          transition={spring}
        />

        <div className="absolute flex flex-row w-full justify-evenly items-center text-sm pointer-events-none">
          <motion.h1
            className={`text-nowrap ${
              !context
                ? theme === "light" ? "text-light-shade" :"text-dark-shade"
                : theme === "light" ? "text-dark-shade opacity-60" : "text-light-shade opacity-60" }
            }`}
          >
            Give me the gist
          </motion.h1>
          <motion.h1
           className={`text-nowrap px-5 ${
            context
              ? theme === "light" ? "text-light-shade" :"text-dark-shade"
              : theme === "light" ? "text-dark-shade opacity-60" : "text-light-shade opacity-60" }
          }`}
          >
            I&apos;ve got time
          </motion.h1>
        </div>
      </motion.button>
    </div>
  );
};

export default LongStoryShort;
