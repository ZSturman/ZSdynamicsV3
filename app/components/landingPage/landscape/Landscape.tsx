/* import { motion, useTransform } from "framer-motion";
import landscapeBG from "./landingPageSvgs";
import { useScrollContext } from "@/app/context/scrollContext";
import { useTheme } from "@/app/context/themeContext";
import { useEffect, useState } from "react";

const Landscape = ({ controls }: { controls: any }) => {
  const { scrollYProgress } = useScrollContext();
  const { theme } = useTheme();
  const [parallaxOffsets, setParallaxOffsets] = useState<
    Record<number, number>
  >({});

  useEffect(() => {
    if (theme === "dark") {
      controls.start("night");
    } else {
      controls.start("day");
    }
  }, [theme, controls]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOffsets = landscapeBG.reduce((acc, layer, index) => {
        // Use the layer's depth value directly to calculate the offset
        acc[index] = -scrollY * (layer.depth * .5); // Adjust the 0.05 multiplier if needed
        return acc;
      }, {} as Record<number, number>);
      setParallaxOffsets(newOffsets);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const groundParallaxScale = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", "100%"]
  );

  const svgContainerVariant = {
    init: {
      y: 0,
      transform: "translateZ(0)",
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
      //style={{ perspective }}
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
      </defs>

      {landscapeBG.map((layer, index) => {
        return (
          <motion.g
            key={index}
            variants={layer.variants}
            initial="init"
            animate={controls}
            style={{ translateY: parallaxOffsets[index] || 0 }}
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
                      animate={theme === "dark" ? "night" : "day"}
                    />
                  );
                })}
              </motion.g>
            )}

            {layer.rightGroup.g && (
              <motion.g>
                {layer.rightGroup.g.paths.map((path, index) => {
                  return (
                    <motion.path
                      key={index}
                      d={path.d}
                      fill={path.fill}
                      stroke={path.stroke}
                      variants={path.variants}
                      animate={theme === "dark" ? "night" : "day"}
                    />
                  );
                })}
              </motion.g>
            )}
          </motion.g>
        );
      })}
    </motion.svg>
  );
};

export default Landscape;
 */





/*   const z45 = useTransform(scrollYProgress, [0, 1], [0, 650]);
  
  const z40 = useTransform(scrollYProgress, [0, 1], [0, 625]);
  const z35 = useTransform(scrollYProgress, [0, 1], [0, 585]);
  const z30 = useTransform(scrollYProgress, [0, 1], [0, 565]);
  const z25 = useTransform(scrollYProgress, [0, 1], [0, 550]);
  const z20 = useTransform(scrollYProgress, [0, 1], [0, 510]);
  const z15 = useTransform(scrollYProgress, [0, 1], [0, 470]);

  const z10 = useTransform(scrollYProgress, [0, 1], [0, 50]); 
  const z5 = useTransform(scrollYProgress, [0, 1], [0, -100]);  */
//  const z10 = useTransform(scrollYProgress, [0, 1], [0, 400]);
//const z5 = useTransform(scrollYProgress, [0, 1], [0, 250]);
