"use client";
import { useTheme } from "@/app/context/themeContext";
import { ParallaxLayer } from "@react-spring/parallax";
import React, { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { landscapeBgArray } from "../landingPageSvgs";
import Image from "next/image";

interface PLayersProps {
  controls: any;
}

const OceanSvgComponent = () => {
  return (
    <ParallaxLayer offset={0} speed={-1} className="z-0">
      <div className="w-full h-full flex flex-col items-center justify-end">
        <div className=" w-full h-[58%]">
          {/* ocean */}
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="relative"
          >
            <rect width="100%" height="100%" fill="#405d71" />
          </svg>
        </div>
      </div>
    </ParallaxLayer>
  );
};

const OceanSvgComponentMemo = React.memo(OceanSvgComponent);

const SkySvgComponent = ({ theme }: { theme: string }) => {
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
  const skyContainerVariant = {
    final: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

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

  return (
    <ParallaxLayer offset={0} speed={0} className=" -z-[100]">
      <motion.div
        variants={skyContainerVariant}
        animate={`${theme === "dark" ? "exit" : "enter"}`}
        className="absolute top-0 left-0 w-full h-screen bg-black"
      >
        <motion.div
          variants={skyOverlayVariant}
          className=" absolute top-0 left-0 w-full h-full nightsky-base nightsky-overlay-3"
          animate={`${theme === "dark" ? "exit" : "enter"}`}
        />
        <motion.div
          variants={skyOverlayVariant}
          className=" absolute top-0 left-0 w-full h-full nightsky-base nightsky-overlay-2"
          animate={`${theme === "dark" ? "exit" : "enter"}`}
        />
        <motion.div
          variants={skyOverlayVariant}
          className=" absolute top-0 l≈eft-0 w-full h-full nightsky-base nightsky-overlay-1"
          animate={`${theme === "dark" ? "exit" : "enter"}`}
        />

        <motion.div
          variants={daytimeVariant}
          className=" absolute top-0 left-0 w-full h-full daytime"
          animate={`${theme === "dark" ? "exit" : "enter"}`}
        />
      </motion.div>
    </ParallaxLayer>
  );
};

const SkySvgComponentMemo = React.memo(SkySvgComponent, (prevProps, nextProps) => {
  return prevProps.theme === nextProps.theme;
});

const PLayers: FC<PLayersProps> = ({ controls }) => {
  const { theme } = useTheme();

  const handleThemeChange = React.useCallback(() => {
    if (theme === "dark") {
      controls.start("night");
    } else {
      controls.start("day");
    }
  }, [theme, controls]);

  useEffect(() => {
    handleThemeChange();
  }, [handleThemeChange]);

  useEffect(() => {
    controls.set("init");
    controls.start("final");
  }, [controls]);

  return (
    <>
      <ParallaxLayer offset={0} speed={0}>
        {/* Sky  */}

<SkySvgComponentMemo theme={theme} />
        {/* <SkySvgComponent theme={theme} /> */}

        {/* Horizon */}

        {landscapeBgArray.map(
          (landscapeBg, index) =>
            landscapeBg.beyondHorizon && (
              <ParallaxLayer key={index} offset={0} speed={landscapeBg.speed} className={`-z[${landscapeBg.zIndex}]`}>
                {/* zIndex Layer */}

                <motion.div
                  className="w-full h-full absolute top-0"
                  //variants={landscapeBg.variants}
                  //animate={controls}
                >
                  <Image src={`/landingPage/z${landscapeBg.zIndex}.png`} alt="landscape" fill objectFit="cover"/> 

                  {/* left */}
{/*     <motion.div
                    className="w-full h-full absolute left-0"
                    variants={landscapeBg.leftGroup.variants}
                    animate={controls}
                  >
                    <motion.svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {landscapeBg.leftGroup.paths.map((path, index) => (
                        <motion.path
                          key={index}
                          d={path.d}
                          fill="green"
                          animate={theme === "dark" ? "night" : "day"}
                          variants={path.variants}
                        />
                      ))}
                    </motion.svg>
                  </motion.div>  */}

                  {/* right */}
{/*                   <motion.div
                    className="w-full h-full absolute left-0"
                    variants={landscapeBg.rightGroup.variants}
                    animate={controls}
                  >
                    <motion.svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {landscapeBg.rightGroup.paths.map((path, index) => (
                        <motion.path
                          key={index}
                          d={path.d}
                          fill={path.fill}
                          animate={theme === "dark" ? "night" : "day"}
                          variants={path.variants}
                        />
                      ))}
                    </motion.svg>
                  </motion.div> */}

                </motion.div> 

                <motion.div
                  className="w-full h-full"
                  //variants={landscapeBg.blurVariant}
                  //animate={controls}
                />
              </ParallaxLayer>
            )
        )}

        <OceanSvgComponentMemo />

        {landscapeBgArray.map(
          (landscapeBg, index) =>
            !landscapeBg.beyondHorizon && (
              <ParallaxLayer key={index} offset={0} speed={landscapeBg.speed} className={`-z[${landscapeBg.zIndex}]`}>

<Image src={`/landingPage/z${landscapeBg.zIndex}.png`} alt="landscape" fill objectFit="cover"/>
                {/* zIndex Layer */}
{/*                 <motion.div
                  className="w-full h-full absolute top-0"
                  variants={landscapeBg.variants}
                  animate={controls}
                > */}
                


                  {/* left */}
{/*  <motion.div
                    className="w-full h-full absolute left-0"
                    variants={landscapeBg.leftGroup.variants}
                    animate={controls}
                  >
                    <motion.svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {landscapeBg.leftGroup.paths.map((path, index) => (
                        <motion.path
                          key={index}
                          d={path.d}
                          fill={path.fill}
                          animate={theme === "dark" ? "night" : "day"}
                          variants={path.variants}
                        />
                      ))}
                    </motion.svg>
                  </motion.div>  */}

                  {/* right */}
{/*   <motion.div
                    className="w-full h-full absolute left-0"
                    variants={landscapeBg.rightGroup.variants}
                    animate={controls}
                  >
                    <motion.svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {landscapeBg.rightGroup.paths.map((path, index) => (
                        <motion.path
                          key={index}
                          d={path.d}
                          fill={path.fill}
                          animate={theme === "dark" ? "night" : "day"}
                          variants={path.variants}
                        />
                      ))}
                    </motion.svg>
                  </motion.div>  */}
            {/*     </motion.div> */}
                <motion.div
                  className="w-full h-full backdrop-blur-[.5px]"
                  //initial={{ opacity: 0 }}
                  //animate={{ opacity: 1 }}
                  //transition={{ delay: index * 0.1 }}
                />


              </ParallaxLayer>
            )
        )}
      </ParallaxLayer>
    </>
  );
};

export default PLayers;
