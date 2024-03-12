"use client";
import { use, useEffect, useRef, useState } from "react";
import NavSlice from "./NavSlice";
import {
  AnimationPlaybackControls,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
import { FaHamburger } from "react-icons/fa";

const NavContainer = () => {
  const [navVisible, setNavVisible] = useState(false);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const rotate = useMotionValue(0);

  useEffect(() => {
    controlsRef.current = animate(rotate, 360, {
      repeat: Infinity,
      duration: 5,
      ease: "linear",
    });

    return () => {
      controlsRef.current?.stop();
    };
  }, []);

  const handleNavToggle = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="w-screen">
      <div className="fixed bottom-0 flex w-full items-center justify-center pb-10">
        <NavSlice navVisible={navVisible} setNavVisible={setNavVisible} />

        {/*         <motion.div className="size-52 bg-indigo-500 rounded-xl" style={{ rotate }} onMouseLeave={()=>{controlsRef.current?.play()}} onMouseEnter={()=>{controlsRef.current?.pause()}}></motion.div>
         */}

        <div className="absolute">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            layout
            className="rouneded-full bg-main-brand p-5 rounded-full text-dark-accent shadow-xl"
            onClick={handleNavToggle}
          >
            <FaHamburger />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NavContainer;
