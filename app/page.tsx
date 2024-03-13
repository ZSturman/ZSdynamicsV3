"use client";

import Header from "./components/header/Header";
import MainSheet from "./components/sheets/MainSheet";
import NavContainer from "./components/nav/NavContainer";
import { PortfolioProvider } from "./context/contextProvider";
import { useScroll, motion, useAnimate } from "framer-motion";
import { useRef } from "react";
import SocialMediaLink from "./components/SocialLinks/SocialMediaLinks";
import socialMediaLinks from "../app/content/socialMediaLinks";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const svgMeasurement = 200;

  return (
    <div
      className="relative w-full  bg-main-brand  text-dark-shade dark:text-light-shade"
      ref={scope}
    >
      <Header />

      <div
        className={`w-full items-center justify-center flex flex-row gap-10 sticky top-4 z-40`}
      >
        {socialMediaLinks.map((link, index) => {
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0, y: 75 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <SocialMediaLink
                href={link.href}
                title={link.title}
                Icon={link.icon}
              />
            </motion.div>
          );
        })}
      </div>

      <PortfolioProvider>
        <MainSheet />
        <NavContainer />
      </PortfolioProvider>
    </div>
  );
}
