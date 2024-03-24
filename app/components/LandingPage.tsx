"use client";
import {
  motion,
  useAnimationControls,
  useInView,
  useScroll,
} from "framer-motion";
import { Suspense, useEffect, useMemo, useRef } from "react";

import Header from "./landingPage/header/Header";
import NavLinks from "./navLinks/NavLinks";
import { useTheme } from "../context/themeContext";
import LoaderOne from "../loaders/svgs";
import FgPersonSvgComponent from "./landingPage/landscape/landingPageSvgs/FgPersonSvgComponent";
import ScrollContext from "../context/scrollContext";
import Landscape from "./landingPage/landscape/Landscape";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { theme } = useTheme();
  const navBarRef = useRef(null);
  const landingPage = useRef(null);
  const isInView = useInView(landingPage, { once: true, amount: 1 });

  const controls = useAnimationControls();

  const { scrollYProgress } = useScroll({
    target: navBarRef,
    offset: ["end end", "end start"],
  });

  const scrollValue = useMemo(() => ({ scrollYProgress }), [scrollYProgress]);

  const daytimeVariant = {
    init: {
      opacity: 0,
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
    },
  };
  const navVariant = {
    init: { scale: 1.9, filter: "blur(20px)", y: 100, x: 100 },
    final: {
      scale: 1,
      filter: "blur(1px)",
      y: 0,
      x: 0,
      transition: { duration: 2.2, type: "tween", ease: "easeOut" },
    },
  };
  const navLinkVariant = {
    init: { scaleX: 2, scaleY: 0.01, filter: "blur(20px)", y: 100 },
    final: {
      scaleX: 1,
      scaleY: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 2.3, type: "tween", ease: "easeOut" },
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
    <ScrollContext.Provider value={scrollValue}>
      <div className="w-full h-screen text-dark-shade relative">
        <div className="w-full min-h-screen">
          <div className="fixed top-0 w-full z-50 mb-10 md:mb-20">
            <Header controls={controls} />
          </div>
          <div
            id="contentSection"
            className="absolute bottom-0 w-full h-18 md:h-32 z-50 flex justify-center items-center "
            ref={navBarRef}
          >
            <motion.div
              className="max-w-[1000px] items-center justify-center flex  w-full"
              animate={controls}
              variants={navLinkVariant}
              initial="init"
            >
              <Suspense fallback={<LoaderOne />}>
                <NavLinks />
              </Suspense>
            </motion.div>
          </div>
          <div
            className="absolute bottom-0 w-full -z-10"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              height: "100%",
            }}
          >
            <motion.div
              className="flex flex-col justify-end items-end"
              animate={controls}
              variants={navVariant}
              initial="init"
            >
              <div className="w-full flex flex-col justify-end items-center">
                <div className="flex flex-row w-full justify-between max-w-[1400px]">
                  <div className="" />

                  <FgPersonSvgComponent controls={controls} />
                </div>
                <div className="w-full h-24 md:h-32 bg-light-shade" />
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 w-full h-screen items-center -z-20 overflow-hidden">
            <Landscape controls={controls} />
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

            <motion.div
              variants={daytimeVariant}
              animate={controls}
              className=" absolute top-0 left-0 w-full h-full daytime"
            />
          </motion.div>
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default LandingPage;
