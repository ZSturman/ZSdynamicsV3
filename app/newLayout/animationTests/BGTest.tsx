import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

const BGTest = () => {
  const controls = useAnimationControls();

  const skyAnimationVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  /*   useEffect(() => {
    controls.set("hidden");
    controls.start("visible");
  }, [controls]);



  const baseTransition = (delay?: number, duration?: number, ease?: string) => {
    return {
      duration: duration || 1,
      ease: ease || "easeInOut",
      delay: delay || 0,
    };
  }

   */

  const generateItemScaleVariant = (zIndex: number) => ({
    hidden: {
      scale: zIndex * -1 * 0.5,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 5,
        ease: "easeOut",
        delay: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.5,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  });

  const leftVariants = {
    hidden: { x: -25 },
    visible: {
      x: 0,
      transition: { duration: 9, ease: "easeInOut" },
    },
  };

  const rightVariants = {
    hidden: { x: 25 },
    visible: {
      x: 0,
      transition: { duration: 9, ease: "easeInOut" },
    },
  };

  const leftVariants2 = {
    hidden: { x: "-25%" },
    visible: {
      x: "0%",
      transition: { delay: 2, duration: 5, ease: "easeInOut" },
    },
  };

  const rightVariants2 = {
    hidden: { x: "25%" },
    visible: {
      x: "0%",
      transition: { delay: 2, duration: 5, ease: "easeInOut" },
    },
  };

  const leftVariants3 = {
    hidden: { x: "-50%" },
    visible: {
      x: "0%",
      transition: { delay: 2, duration: 7, ease: "easeInOut" },
    },
  };

  const rightVariants3 = {
    hidden: { x: "50%" },
    visible: {
      x: "0%",
      transition: { delay: 2, duration: 7, ease: "easeInOut" },
    },
  };

  const generateMovementVariant = (zIndex: number, direction: string) => ({
    hidden: {
      x: direction === "left" ? -25 : 25,
    },
    visible: {
      x: 0,
      transition: { duration: 5, ease: "easeOut" },
    },
  });

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "start start"],
  });

  const smParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const mdParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const lgParallax = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Function to decide which parallax effect to use based on z-index
  const getParallaxEffect = (zIndex: number) => {
    switch (zIndex) {
      case -50:
        return smParallax;
      case -40:
        return mdParallax;
      case -30:
        return lgParallax;
      default:
        return smParallax;
    }
  };

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="bg-black w-screen h-screen"
    >
      <motion.div
        /* animate={controls} variants={cameraAnimationVariant}  */ id="landingPage"
        className="w-screen h-screen relative"
      >
        {/* -z-50 */}
        <motion.div
          animate={controls}
          variants={generateItemScaleVariant(-50)}
          style={{ y: getParallaxEffect(-50) }}
          className="w-full h-1/2 flex flex-row absolute bottom-0"
        >
          <motion.div
            id="right"
            animate={controls}

       
          >
            <Image
              src="/ZSdV3Svgs/lz12.png"
              alt="landingPage-1"
              width={500}
              height={500}
              className="absolute bottom-0 left-0"
            />
          </motion.div>
          <motion.div
            id="right"
            animate={controls}
    
       
          >
            <Image
              src="/ZSdV3Svgs/rz12.png"
              alt="landingPage-1"
              width={500}
              height={500}
              className="absolute bottom-0 right-0"
            />
          </motion.div>
        </motion.div>

        {/* -z-40 */}
        <motion.div
          animate={controls}
          variants={generateItemScaleVariant(-40)}
          style={{ y: getParallaxEffect(-40) }}
          className="w-full h-1/3 flex flex-row absolute bottom-0"
        >
          <motion.div
            id="left"
            animate={controls}
            variants={leftVariants2}
            className="w-1/2 h-full "
          >
            <Image
              src="/ZSdV3Svgs/rz10.png"
              alt="landingPage-1"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            id="right"
            animate={controls}
            variants={rightVariants2}
            className="w-1/2 h-fullr"
          >
          </motion.div>
        </motion.div>

        {/* -z-30 */}
        <motion.div
          animate={controls}
          variants={generateItemScaleVariant(-30)}
          style={{ y: getParallaxEffect(-30) }}
          className="w-full h-1/5 flex flex-row absolute bottom-0"
        >
          <motion.div
            id="left"
            animate={controls}
            variants={leftVariants3}
            className="w-1/2 h-full "
          >

          </motion.div>
          <motion.div
            id="right"
            animate={controls}
            variants={rightVariants3}
            className="w-1/2 h-full "
          >

          </motion.div>
        </motion.div>
      </motion.div>
      <div
        ref={container}
        className="w-full absolute bottom-0 h-32 bg-slate-600"
      ></div>
      <motion.div
        animate={controls}
        variants={skyAnimationVariant}
        className="h-screen w-screen bg-slate-800 absolute top-0 -z-50"
      />

      <div className="h-screen w-screen bg-slate-800"></div>
    </div>
  );
};

export default BGTest;
