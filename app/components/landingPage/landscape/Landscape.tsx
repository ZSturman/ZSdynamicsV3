import { motion, useTransform } from "framer-motion"
import landscapeBG from "./landingPageSvgs"
import { useScrollContext } from "@/app/context/scrollContext";
import { useTheme } from "@/app/context/themeContext";
import { useEffect } from "react";

const Landscape = ({ controls }: {controls: any}) => {
  const { scrollYProgress } = useScrollContext();
  const { theme } = useTheme();

  const z45 = useTransform(scrollYProgress, [0, 1], [0, 1300]);
  const z40 = useTransform(scrollYProgress, [0, 1], [0, 1250]);
  const z35 = useTransform(scrollYProgress, [0, 1], [0, 1170]);
  const z30 = useTransform(scrollYProgress, [0, 1], [0, 1130]);
  const z25 = useTransform(scrollYProgress, [0, 1], [0, 1050]);
  const z20 = useTransform(scrollYProgress, [0, 1], [0, 1010]);
  const z15 = useTransform(scrollYProgress, [0, 1], [0, 970]);
  const z10 = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const z5 = useTransform(scrollYProgress, [0, 1], [0, 750]);

  

  const getParallaxEffect = (zIndex: number) => {
    switch (zIndex) {
      case -45:
        return z45;
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

  useEffect(() => {
    if (theme === "dark") {
      controls.start("night");
    } else {
      controls.start("day");
    }
  }, [theme, controls]);

  const groundParallaxScale = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", "100%"]
  );

  const svgContainerVariant = {
    init: {
      y: 0,
      transform: 'translateZ(0)',
    },
    final: {
      y: -32,
      transition: {
        duration: 2,
      },
    },
  };


  return (
    <motion.svg
    viewBox="0 0 1728 1265"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full absolute bottom-0 bg-transparent"
    variants={svgContainerVariant}
    initial="init"
    animate={controls}
    style={{ willChange: 'transform' }}
  >
    <motion.rect
      style={{ y: groundParallaxScale }}
      id="water"
      fill={`url(#waterGradient)`}
      className={`w-full h-full`}
    />
    <defs>
      <linearGradient id="waterGradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="40%" stopColor="transparent" />
        <stop offset="40%" stopColor="#b1ecf9" />
        <stop offset="40.5%" stopColor="#4A90E2" />
      </linearGradient>

      {/* 
              <linearGradient id="waterGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="38%" stopColor="transparent" stop-opacity="0.2" />
          <stop offset="40%" stopColor="#90d4f1" />
          <stop offset="45%" stopColor="#4A90E2" />
          <stop offset="50%" stopColor="#3e7bc9" />
          <stop offset="55%" stopColor="#4A90E2" />
          <stop offset="65%" stopColor="#b1ecf9" stop-opacity="0.4" />
        </linearGradient> */}
    </defs>


    {landscapeBG.map((layer, index) => {
      return (
        <motion.g
          key={index}
          variants={layer.variants}
          initial="init"
          animate={controls}
          style={{ y: getParallaxEffect(layer.zIndex) }}
          className={`-z[${layer.zIndex}]`}
        >
          {layer.leftGroup.g && (
            <motion.g variants={layer.leftGroup.g.variants}>
              {layer.leftGroup.g.paths.map((path, index) => {
                return (
                  <motion.path
                    transition={{ duration: 0 }}
                    key={index}
                    d={path.d}
                    fill={path.fill}
                    stroke={path.stroke}
                    variants={path.variants}
                    animate={controls}
                    
                  />
                );
              })}
            </motion.g>
          )}

          {layer.rightGroup.g && (
            <motion.g

            >
              {layer.rightGroup.g.paths.map((path, index) => {
                return (
                  <motion.path
                    key={index}
                    d={path.d}
                    fill={path.fill}
                    stroke={path.stroke}
                    variants={path.variants}
                    animate={controls}
                  />
                );
              })}
            </motion.g>
          )}
        </motion.g>
      );
    })}
  </motion.svg>
  )
}

export default Landscape