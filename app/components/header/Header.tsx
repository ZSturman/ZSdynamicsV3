"use client";
import { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion
} from "framer-motion";

const Header = () => {
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [300, 10]); // Adjust range as needed



  return (
    <>
      <motion.div className="text-dark-shade flex flex-col justify-center items-center min-h-72 relative" initial={{ height: "100vh"}} animate={{ height: "30vh"}} transition={{ delay: 1, duration: 3}}>
        <div className="sticky">
          <motion.h1 className="text-6xl tracking-widest text-center ">
            Zachary Sturman
          </motion.h1>
        </div>

        <div className="sticky" style={{ transform: `translateY(${y}px)` }}>
          <motion.h1 className="text-xl tracking-widest text-center " >
            Designing Stuff
          </motion.h1>
        </div>
      </motion.div>
    </>
  );
};

export default Header;