import {
  useTransform,
  motion,
  useScroll,
  useAnimationControls,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import landscapeBG from "../landingPage/landingPageSvgs";

const AnimTest = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "start start"],
  });

  const controls = useAnimationControls();

  const groundParallaxScale = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", "150%"]
  );

  const skyAnimationVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  useEffect(() => {
    controls.set("init");
    controls.start("final");
  }, [controls]);

  const z40 = useTransform(scrollYProgress, [0, 1], [0, 1700]);
  const z35 = useTransform(scrollYProgress, [0, 1], [0, 1600]);
  const z30 = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const z25 = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const z20 = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const z15 = useTransform(scrollYProgress, [0, 1], [0, 700]);
  const z10 = useTransform(scrollYProgress, [0, 1], [0, 550]);
  const z5 = useTransform(scrollYProgress, [0, 1], [0, 400]);

  // Function expanded to decide which parallax effect to use based on z-index
  const getParallaxEffect = (zIndex: number) => {
    switch (zIndex) {
      case -40:
        return z40;
      case -35:
        return z35;
      case -30:
        return z30;
      case -25:
        return z25;
      case -20:
        return z20;
      case -15:
        return z15;
      case -10:
        return z10;
      case -5:
        return z5;
      default:
        return z5;
    }
  };

  return (
    <>
      <div className="w-screen h-screen relative">
        <motion.svg
          width="2290"
          height="1117"
          viewBox="0 0 2290 1117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-screen h-screen absolute bottom-0"
        >
          <motion.rect
            style={{ y: groundParallaxScale }}
            id="water"
            y="497"
            width="2290"
            height="620"
            fill="#828FC0"
          />
          {landscapeBG.map((layer, index) => {
            return (
              <motion.g
                key={index}
                variants={layer.variants}
                animate={controls}
                style={{ y: getParallaxEffect(layer.zIndex) }}
              >
                {layer.leftGroup.g && (
                  <motion.g variants={layer.leftGroup.g.variants}>
                    {layer.leftGroup.g.paths.map((path, index) => {
                      return (
                        <motion.path
                          key={index}
                          d={path.d}
                          fill={path.fill}
                          stroke={path.stroke}
                        />
                      );
                    })}
                  </motion.g>
                )}

                {layer.rightGroup.g && (
                  <motion.g variants={layer.rightGroup.g.variants}>
                    {layer.rightGroup.g.paths.map((path, index) => {
                      return (
                        <motion.path
                          key={index}
                          d={path.d}
                          fill={path.fill}
                          stroke={path.stroke}
                        />
                      );
                    })}
                  </motion.g>
                )}
              </motion.g>
            );
          })}
        </motion.svg>
        <motion.div
          className="absolute top-0 left-0 bg-black w-screen h-screen -z-50"
          variants={skyAnimationVariant}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          ref={container}
          className="w-full absolute bottom-0 h-32 bg-slate-600"
          initial={{
            scale: 1.2,
            filter: "blur(100px)",


          }}
          animate={{
            scale: 1,
            filter: "blur(0px)",
 
            transition: { delay: .5, duration: 2 },
          }}

        ></motion.div>
      </div>
      <div className="h-screen w-screen bg-slate-900"></div>
    </>
  );
};

export default AnimTest;
