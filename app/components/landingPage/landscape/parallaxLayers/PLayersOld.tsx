"use client";
import { useTheme } from "@/app/context/themeContext";
import { ParallaxLayer } from "@react-spring/parallax";
import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { landscapeBgArray, landscapeBgObject } from "../landingPageSvgs";

interface PLayersProps {
  controls: any;
}





const PLayers: FC<PLayersProps> = ({ controls }) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      controls.start("night");
    } else {
      controls.start("day");
    }
  }, [theme, controls]);

  useEffect(() => {
    controls.set("init");
    controls.start("final");
  }, [controls]);

  const baseTransition = {
    delay: 0,
    duration: 2,
    ease: "easeInOut",
    times: [0, 1],
  };




  return (
    <>
      <ParallaxLayer offset={0} speed={0}>
        {/* Horizon */}

        

        <ParallaxLayer offset={0} speed={landscapeBgObject.z45Variant.speed}>
          {/* zIndex */}
          <motion.div
            className="w-full h-full absolute top-0"
            variants={landscapeBgObject.z45Variant.variants}
            animate={controls}
          >
            {/* left */}
            <motion.div
              className="w-full h-full absolute left-0"
              variants={landscapeBgObject.z45Variant.leftGroup.variants}
              animate={controls}
            >
              <motion.svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d={landscapeBgObject.z45Variant.leftGroup.paths[0].d}
                  animate={theme === "dark" ? "night" : "day"}
                  variants={
                    landscapeBgObject.z45Variant.leftGroup.paths[0].variants
                  }
                />
              </motion.svg>
            </motion.div>

            {/* right */}
            <motion.div
              className="w-full h-full absolute left-0"
              variants={landscapeBgObject.z45Variant.rightGroup.variants}
              animate={controls}
            >
              <motion.svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d={landscapeBgObject.z45Variant.rightGroup.paths[0].d}
                  animate={theme === "dark" ? "night" : "day"}
                  variants={
                    landscapeBgObject.z45Variant.rightGroup.paths[0].variants
                  }
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        </ParallaxLayer>

        {/* Ocean and Middle */}
        <ParallaxLayer offset={0} speed={-0.9}>
          <div className="w-full h-full flex flex-col items-center justify-end">
            <div className=" w-full h-1/2 text-9xl  text-slate-200">
              {/* ocean */}
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                className="relative"
              >
                <rect width="100%" height="100%" fill="blue" />
              </svg>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={landscapeBgObject.z10Variant.speed}>
          {/* zIndex */}
          <motion.div
            className="w-full h-full absolute top-0"
            variants={landscapeBgObject.z10Variant.variants}
            animate={controls}
          >
            {/* left */}
            {landscapeBgObject.z10Variant.leftGroup.paths.map(
              (path, index) => (
                <motion.div
                  key={index}
                  className="w-full h-full absolute left-0"
                  variants={landscapeBgObject.z10Variant.leftGroup.variants}
                  animate={controls}
                >
                  <motion.svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d={path.d}
                      animate={theme === "dark" ? "night" : "day"}
                      variants={path.variants}
                    />
                  </motion.svg>
                </motion.div>
              )
            )}
            {/* right */}
            {landscapeBgObject.z10Variant.rightGroup.paths.map(
              (path, index) => (
                <motion.div
                  key={index}
                  className="w-full h-full absolute left-0"
                  variants={landscapeBgObject.z10Variant.rightGroup.variants}
                  animate={controls}
                >
                  <motion.svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d={path.d}
                      animate={theme === "dark" ? "night" : "day"}
                      variants={path.variants}
                    />
                  </motion.svg>
                </motion.div>
              )
            )}
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={landscapeBgObject.z5Variant.speed}>
          {/* zIndex */}
          <motion.div
            className="w-full h-full absolute top-0"
            variants={landscapeBgObject.z5Variant.variants}
            animate={controls}
          >
            {/* left */}
            {landscapeBgObject.z5Variant.leftGroup.paths.map(
              (path, index) => (
                <motion.div
                  key={index}
                  className="w-full h-full absolute left-0"
                  variants={landscapeBgObject.z5Variant.leftGroup.variants}
                  animate={controls}
                >
                  <motion.svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d={path.d}
                      animate={theme === "dark" ? "night" : "day"}
                      variants={path.variants}
                    />
                  </motion.svg>
                </motion.div>
              )
            )}
            {/* right */}
            {landscapeBgObject.z5Variant.rightGroup.paths.map(
              (path, index) => (
                <motion.div
                  key={index}
                  className="w-full h-full absolute left-0"
                  variants={landscapeBgObject.z5Variant.rightGroup.variants}
                  animate={controls}
                >
                  <motion.svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d={path.d}
                      animate={theme === "dark" ? "night" : "day"}
                      variants={path.variants}
                    />
                  </motion.svg>
                </motion.div>
              )
            )}
          </motion.div>
        </ParallaxLayer>


        
      </ParallaxLayer>
    </>
  );
};

export default PLayers;
