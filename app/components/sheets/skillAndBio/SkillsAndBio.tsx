"use client";
import LongStoryShort from "@/app/components/LongStoryShort";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import SkillsList from "./components/skillsList";
import Image from "next/image";

const SkillsAndBio = () => {
  const [context, setContext] = useState(true);

  const contextVariants = {
    initial: { opacity: 0, scaleY: 0 },
    animate: { opacity: 1, scaleY: 1 },
    exit: { scaleY: 0, scaleX: 2, opacity: 0 },
  };

  return (
    <>
      {/* Bio Top */}
      <div className="flex flex-col md:flex-row gap-0 items-center justify-center bg-slate-600 p-10">
        {/* Left */}
        <div className="flex items-center justify-center ">
          <Image src="/ZsToon.png" width={400} height={200} alt="Toon" />
        </div>
        {/* right */}
        <div className="flex flex-col items-center flex-1justify-evenly bg-slate-800 p-5">
          <div className="w-full text-left text-3xl tracking-widest mb-2">
            Skills <br /> &Bio
          </div>
          <div>
            <p className="mb-6 text-lg font-medium">
              I&apos;m a front-end developer specializing in crafting
              exceptional user experiences through thoughtful UI/UX design and a
              focus on performance optimization. My passion for cutting-edge
              technologies drives my continuous learning and growth.
            </p>
          </div>
          <div className="w-full flex flex-row items-right justify-between invisible md:visible">
            <div className="w-1/2 md:w-3/4"></div>
            <LongStoryShort context={context} setContext={setContext} />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-2 bg-slate-900"></div>
      {/* Skills */}

      <SkillsList />
      {/* Divider */}
      <div className="w-full h-1 bg-slate-900"></div>
      {/*Bullets */}

      <div className="flex flex-col w-full gap-5 p-5">
        <div className="w-full flex flex-row items-right justify-between visible md:invisible">
          <LongStoryShort context={context} setContext={setContext} />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>

          <AnimatePresence>
            {context && (
              <motion.div
                className="text-base"
                variants={contextVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Comprehensive Career Overview
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <h3 className="text-lg font-semibold mb-2">
                      Evo Sol (Senior Front-End Developer, October 2022 -
                      Present)
                    </h3>
                    <p>
                      Currently driving the development of an AI-powered NLP web
                      application, focusing on intuitive UI/UX and robust
                      front-end architecture. My work has streamlined the
                      platform, leading to a 30% performance boost. I&apos;m
                      continually honing my skills in NextJS and JavaScript to
                      build a scalable framework that anticipates user needs.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold mb-2">
                      The Knife Grinder (Digital Strategy Consultant, November
                      2019 - October 2022)
                    </h3>
                    <p>
                      Spearheaded a comprehensive digital strategy that elevated
                      the company&apos;s online presence and fueled a 20% sales
                      increase. My expertise directly contributed to the
                      business&apos;s valuation and successful sale,
                      highlighting my ability to connect technical skills with
                      business strategy.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold mb-2">
                      Ameristar Casino (Frontend Data Visualization
                      Engineer/Developer, April 2017 - November 2019)
                    </h3>
                    <p>
                      Designed and built an innovative React and D3.js dashboard
                      for data visualization, empowering strategic
                      decision-making. This project demonstrated my ability to
                      transform complex data into actionable, user-centric
                      insights.
                    </p>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold mb-4">Academic Achievements</h2>

          <AnimatePresence>
            {context && (
              <div>
                <motion.p
                  className="text-base"
                  variants={contextVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  My educational background includes a Bachelor of Science in
                  Media Communication from Full Sail University. I&apos;m
                  committed to lifelong learning, holding certifications in data
                  analytics and cloud computing to stay ahead in a rapidly
                  changing field.
                </motion.p>
              </div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Career Highlights</h2>
          <AnimatePresence>
            {context && (
              <div>
                <motion.p
                  className="text-base"
                  variants={contextVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  Throughout my career, I&apos;ve spearheaded the development of
                  AI-driven applications, revamped digital strategies for
                  greater impact, and created impactful data visualizations. I
                  thrive on delivering tangible results that align with business
                  objectives.
                </motion.p>
              </div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
          <AnimatePresence>
            {context && (
              <div>
                <motion.p
                  className="text-base"
                  variants={contextVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  My core strengths lie in front-end development, with expertise
                  in NextJS, React, TypeScript, and a solid grasp of CSS
                  frameworks and state management. I&apos;m passionate Bio UI/UX
                  design, using tools like Figma and SketchBook to build
                  user-centered interfaces. Performance optimization is always
                  top of mind, ensuring fast and responsive web experiences. My
                  background in backend support, CI/CD, and AI tools broadens my
                  full-stack capabilities.
                </motion.p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SkillsAndBio;
