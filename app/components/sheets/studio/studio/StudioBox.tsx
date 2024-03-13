"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface StudioBoxProps {
  children: React.ReactNode;
}

const initial = {
  bottom: {
    d: "M38 107H252L280 150L10 149L38 107Z",
    fill: "#40A7D4",
  },
  back: {
    d: "M43 0H247L252 107H38L43 0Z",
    fill: "#D9D9D9",
  },
  right: {
    d: "M290 54L247 0L252 107L280 150L290 54Z",
    fill: "#FF0000",
  },
  left: {
    d: "M0 54L43 0L252 107L280 150L290 54Z",
    fill: "#FF0000",
  },
  front: {
    d: "M0 54H290L280 150H10L0 54Z",
    fill: "#6B90D7",
  },
};

const middle = {
  bottom: {
    d: "M43 128H257L300 150H0L43 128Z",
    fill: "#40A7D4",
  },
  back: {
    d: "M43 21H257L300 128H0L43 21Z",
    fill: "#D9D9D9",
  },
  right: {
    d: "M300 0L257 21V128L300 150L300 0Z",
    fill: "#FF0000",
  },
  left: {
    d: "M0 0.5L43 21V128L1 150L0 0.5Z",
    fill: "#FF0000",
  },
  front: {
    d: "M0 0H300L300 150H0L0 0Z",
    fill: "#6B90D7",
  },
};

const final = {
  bottom: {
    d: "M43 148H257L300 130H0L43 148Z",
    fill: "#40A7D4",
  },
  back: {
    d: "M43 41H257L300 130H0L43 41Z",
    fill: "#D9D9D9",
  },
  right: {
    d: "M262 19L230 35.4267V114.573L262 131V19Z",
    fill: "#FF0000",
  },
  left: {
    d: "M38 19L70 34.3579V114.518L38.7442 131L38 19Z",
    fill: "#FF0000",
  },
  front: {
    d: "M20 0H280L300 130H0L20 0Z",
    fill: "#6B90D7",
  },
};

const StudioBox: React.FC<StudioBoxProps> = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Directly call useTransform for each path you need
  const bottomPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [initial.bottom.d, middle.bottom.d, final.bottom.d]
  );
  const backPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [initial.back.d, middle.back.d, final.back.d]
  );
  const leftPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [initial.left.d, middle.left.d, final.left.d]
  );
  const rightPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [initial.right.d, middle.right.d, final.right.d]
  );
  const frontPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [initial.front.d, middle.front.d, final.front.d]
  );

  return (
    <>
      <div className="relative w-full h-full flex items-top justify-center " ref={ref}>
        <div className="absolute ">
          <svg
            width="300"
            height="150"
            viewBox="0 0 300 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.g>
              <motion.path d={backPath} fill="yellow" />

              <motion.path d={leftPath} fill="purple" />
              <motion.path d={rightPath} fill="red" />

              <motion.path d={bottomPath} fill="orange" />
            </motion.g>
          </svg>
        </div>

        <div className="absolute">{children}</div>

        <div className="absolute ">
          <svg
            width="300"
            height="150"
            viewBox="0 0 300 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.g>
              <motion.path d={frontPath} fill="blue" />
            </motion.g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default StudioBox;
