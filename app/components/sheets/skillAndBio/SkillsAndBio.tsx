"use client";
import LongStoryShort from "@/app/components/LongStoryShort";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import SkillsList from "./components/skillsList";
import Image from "next/image";
import BioCard from "./bioCard";

const SkillsAndBio = () => {
  const [context, setContext] = useState(true);

  const contextVariants = {
    initial: { opacity: 0, scaleY: 0 },
    animate: { opacity: 1, scaleY: 1 },
    exit: { scaleY: 0, scaleX: 2, opacity: 0 },
  };

  type BioDateType = {
    from?: {
      month?: string;
      year: string;
    };
    to?: {
      month?: string;
      year: string;
    };
    on?: {
      month?: string;
      year: string;
    };
    onGoing?: boolean;
  };

  type BioCardType = {
    date?: BioDateType;
    headline: string;
    subheader?: string;
    content: string;
  };

  /*                 <ul className="list-disc list-inside space-y-2">
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
                
                
                
                */

  const bioCards = [
    {
      date: {
        on: {
          month: "Novemer",
          year: "2014",
        },
      },
      headline: "Bachelors of Science in Film",
      subheader: "Full Sail University, Orlando, FL",
      content:
        "My educational background includes a Bachelor of Science in Media Communication from Full Sail University. I'm committed to lifelong learning, holding certifications in data analytics and cloud computing to stay ahead in a rapidly changing field.",
    },
    {
      date: {
        from: {
          year: "2016",
        },
        to: {
          year: "2017",
        },
      },
      headline: "Data Analytics Certification",
      content:
        "I completed a comprehensive data analytics certification program, gaining expertise in data visualization, machine learning, and predictive analytics.",
    },
    {
      date: {
        from: {
          year: "2017",
        },
        to: {
          year: "2018",
        },
      },
      headline: "Cloud Computing Certification",
      content:
        "I earned a cloud computing certification, mastering AWS, Azure, and Google Cloud Platform.",
    },
  ];

  return (
    <>
      <div className="w-full h-screen bg-light-accent relative">
        <div className="absolute top-0 w-full h-96">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-center px-5">
              {/* Image */}
              <div className="w-1/3 h-full relative">
                <div className="w-96 h-96 rounded-full bg-light-accent absolute top-0 left-0 overflow-hidden m-5 shadow-lg">
                  <Image src="/ZsToon.png" fill alt="Toon" />
                </div>
                <div className="w-96 h-96 rounded-full border-4 border-dark-shade/50 absolute top-0 left-0 overflow-hidden m-9 shadow-lg" />
                <div className="w-48 h-48 rounded-full bg-light-accent absolute top-0 left-0 overflow-hidden mx-4 opacity-40 blur-md" />
              </div>

              {/* Title */}
              <div className="flex flex-col items-center flex-1 justify-evenly bg-black/50 backdrop-blur-lg m-5 p-5 rounded-lg">
                <div className="w-full text-left text-3xl tracking-widest mb-2">
                  Skills <br /> &Bio
                </div>
                <div>
                  <p className="mb-6 text-lg font-medium">
                    I&apos;m a front-end developer specializing in crafting
                    exceptional user experiences through thoughtful UI/UX design
                    and a focus on performance optimization. My passion for
                    cutting-edge technologies drives my continuous learning and
                    growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-row items-center justify-center ">
              <LongStoryShort context={context} setContext={setContext} />
            </div>

            <div className="w-full flex flex-col mt-48">
              {/* Bio Cards */}
              {bioCards.map((bioCard, index) => (
                <BioCard context={context} bioCard={bioCard} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-end">
          <div className="flex flex-row flex-grow w-full">
            <div className="w-1/3 h-full bg-light-shade" />
            <div className="w-full h-full flex flex-col">
              <div className="h-1/5 w-full bg-black/30" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-slate-900" />
      <h1>Make this static</h1>
      <SkillsList />

      <div className="w-full h-32 bg-slate-900" />

      
    </>
  );
};

export default SkillsAndBio;
