"use client";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import landscapeBG from "./landingPage/landingPageSvgs";
import Header from "./landingPage/Header";
import NavLinks from "./navLinks/NavLinks";
import { useTheme } from "../context/themeContext";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { theme } = useTheme();
  const navBarRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: navBarRef,
    offset: ["end end", "end start"],
  });
  const controls = useAnimationControls();

  const groundParallaxScale = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", "150%"]
  );

  const daytimeVariant = {
    init: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 2,
      },
    }
  };

  const navVariant = {
    init: { scale: 1.2, filter: "blur(100px)", y: 200 },
    final: {
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { delay: 0.5, duration: 1.5 },
    },
  };

  useEffect(() => {
    controls.set("init");
    controls.start("final");
  }, [controls]);

  useEffect(() => {
    if (theme === "dark") {
      controls.start("exit");
    } else {
      controls.start("enter");
    }
  }, [theme, controls]);


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

  const skyContainerVariant = {
    final: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const skyOverlayVariant = {
    init: {
      opacity: 0,
    },
    final: {
      opacity: 0.3,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <div className="w-full h-screen text-dark-shade relative">
        <div className="w-full min-h-screen relative">
          <div className="sticky top-0 w-full z-50 mb-20">
            <Header />
          </div>
          <div className="absolute bottom-0 w-full h-32 z-50" ref={navBarRef}>
            <NavLinks />
          </div>
          <div className="absolute bottom-0 w-full -z-10">
            <motion.div
              className="flex flex-col h-full justify-end items-end"
              animate={controls}
              variants={navVariant}
            >
              <div className="flex w-full flex-row items-end justify-between px-10">
                {/* bird */}
                <motion.div className="h-20 w-12 bg-dark-accent invisible md:visible" />
                {/* - -  Person */}
                <motion.div className="h-36 w-24 md:h-72 md:w-48 bg-dark-accent" />
              </div>
              <div className="w-full h-32 bg-light-accent"></div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 w-full h-screen items-center -z-20 overflow-hidden">
            <motion.svg
              viewBox="0 0 2290 1117"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full absolute bottom-32"
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
                    className={`-z[${layer.zIndex}]`}
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
          </div>

          <motion.div
            variants={skyContainerVariant}
            animate={controls}
            className="absolute top-0 left-0 w-full h-screen -z-50 bg-black"
          >
            <motion.div
              variants={skyOverlayVariant}
              className=" absolute top-0 left-0 w-full h-full nightsky-base nightsky-overlay-3"
            />
            <motion.div
              variants={skyOverlayVariant}
              className=" absolute top-0 left-0 w-full h-full nightsky-base nightsky-overlay-2"
            />
            <motion.div
              variants={skyOverlayVariant}
              className=" absolute top-0 l≈eft-0 w-full h-full nightsky-base nightsky-overlay-1"
            />

            <motion.div variants={daytimeVariant} animate={controls} className=" absolute top-0 left-0 w-full h-full daytime"/>
            
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
