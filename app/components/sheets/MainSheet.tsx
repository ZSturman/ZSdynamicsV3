// MainSheet.jsx or wherever MainSheet is defined
import { usePortfolio } from "@/app/context/contextProvider";
import AboutSheet from "./about/AboutSheet";
import ExperienceSheet from "./experience/ExperienceSheet";
import LabSheet from "./lab/LabSheet";
import ContactSheet from "./contact/ContactSheet";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

const MainSheet = ({}) => {
  const { selectedContent } = usePortfolio();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const thresholdStart = 0.86;
  const thresholdEnd = 0.98;
  const startY = -20;
  const endY = 100;

  const yPos = useTransform(
    scrollYProgress,
    [0, thresholdStart, thresholdEnd, 1],
    [startY, startY, endY, endY]
  );

  return (
    <div className="flex items-start justify-center bg-transparent py-5 h-full ">

      <div className="min-h-screen w-screen sm:w-[700px] md:w-[800px] lg:w-[900px] rounded-xl bg-light-shade dark:bg-dark-shade shadow-xl   flex flex-col h-full">
        <div
          ref={ref}
          className="sticky top-0 h-20 w-full bg-dark-accent rounded-t-xl z-10 items-center text-center flex justify-end flex-col overflow-hidden shadow-md "
        >
          <motion.h1
            className="text-3xl tracking-widest pt-12"
            style={{ y: yPos }}
          >
            {selectedContent}
          </motion.h1>
        </div>

        <div className="flex-1 px-5 py-5 flex items-start justify-center">
          {selectedContent === "about" && <AboutSheet />}
          {selectedContent === "experience" && <ExperienceSheet />}
          {selectedContent === "lab" && <LabSheet />}
          {selectedContent === "contact" && <ContactSheet />}
        </div>
        <div className="sticky bottom-0 w-full h-48 flex items-center justify-center bg-gradient-to-t from-light-shade from-50% dark:from-dark-shade to-transparent rounded-b-xl"></div>
        <div className="h-20 w-full bg-dark-accent rounded-b-xl"></div>
      </div>
    </div>
  );
};

export default MainSheet;
