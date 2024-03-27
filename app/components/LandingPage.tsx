"use client";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { Suspense, useEffect, useMemo } from "react";

import NavLinks from "./navLinks/NavLinks";
import { useTheme } from "../context/themeContext";
import LoaderOne from "../loaders/svgs";
import FgPersonSvgComponent from "./landingPage/landscape/landingPageSvgs/FgPersonSvgComponent";
import ScrollContext from "../context/scrollContext";
import ThemeToggle from "./toggles/ToggleTheme";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ContentSection from "./ContentSection";
import PLayers from "./landingPage/landscape/parallaxLayers/PLayers";
import HomePage from "./sheets/homePage/HomePage";

const LandingPage: React.FC<{}> = () => {
  const { theme } = useTheme();
  const controls = useAnimationControls();
  const { scrollYProgress } = useScroll();

  const scrollValue = useMemo(() => ({ scrollYProgress }), [scrollYProgress]);

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
    const animationVariant = theme === "dark" ? "exit" : "enter";
    controls.start(animationVariant);
  }, [theme, controls]);

  const navH = "96px";

  return (
    <ScrollContext.Provider value={scrollValue}>
      <div
        className="relative w-screen min-h-screen text-dark-shade"
        id="landingPage"
      >
        {/* Parallax Background */}
        <Parallax pages={2} style={{ top: 0, left: 0, position: "absolute" }}>
          <ParallaxLayer offset={0} speed={0} >
            <PLayers controls={controls} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0}>
            <HomePage />
          </ParallaxLayer>
        </Parallax>


    {/* Content and Navigation */}
    <div className="sticky top-0 w-full">
          <Suspense fallback={<LoaderOne />}>
            <ContentSection controls={controls} />
          </Suspense>
        </div>

        {/* FgPersonSvgComponent and NavLinks */}
        <div className="fixed bottom-0 w-full overflow-hidden">
          <div className="flex justify-end">
            <FgPersonSvgComponent controls={controls} />
          </div>
          <div className="w-full bg-lightest-shade shadow-2xl" style={{ height: navH }}>
            <Suspense fallback={<LoaderOne />}>
              <NavLinks />
            </Suspense>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="absolute" style={{ top: "30px", left: "30px" }}>
          <ThemeToggle />
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default LandingPage;
