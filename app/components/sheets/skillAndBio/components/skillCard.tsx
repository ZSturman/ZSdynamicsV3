"use client";
import { useState, FC } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useTheme } from "@/app/context/themeContext";

interface SkillCardProps {
  name: string;
  icon: JSX.Element;
  category: string | string[];
}

const SkillCard: FC<SkillCardProps> = ({ name, category, icon }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { theme } = useTheme();

  




  return (
    <>
      <motion.div className="sm:hidden flex flex-col w-full items-center justify-center group hover:bg-dark-accent hover:text-light-shade hover:p-3 transition-all duration-100 text-dark-shade">
        <div className="flex flex-row w-full justify-center items-center  gap-2 ">
          <div className="text-3xl text-dark-shade group-hover:text-light-shade">{icon}</div>
          <div className="text-dark-shade group-hover:text-light-shade">{name}</div>
        </div>

        <motion.div
          className="text-center invisible group-hover:visible"

        >
          {category}
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden sm:block relative rounded-lg border-4 border-dark-shade p-2 overflow-hidden"
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className={`absolute inset-0 w-full pointer-events-none h-full ${
                theme === "dark" ? "bg-black/80" : " bg-white/80"
              }  flex items-center justify-center tracking-tighter text-center`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.h1
                className="sm:text-sm sm:leading-3"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                {name}
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-2xl lg:text-3xl xl:text-5xl font-bold">{icon}</div>
      </motion.div>
    </>
  );
};

export default SkillCard;
