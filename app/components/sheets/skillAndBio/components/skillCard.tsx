"use client"
import { useState, FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: JSX.Element;
  category: string | string[];
}

const SkillCard: FC<SkillCardProps> = ({ name, category, icon }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="rounded-lg border-4 border-dark-shade p-2 overflow-hidden relative"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 w-full pointer-events-none h-full bg-black bg-opacity-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h1
              className=" "
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              {name}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-5xl font-bold">{icon}</div>
    </motion.div>
  );
};

export default SkillCard;
