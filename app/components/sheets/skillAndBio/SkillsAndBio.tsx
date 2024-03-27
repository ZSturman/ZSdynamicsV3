"use client";
import LongStoryShort from "@/app/components/toggles/LongStoryShort";
import { motion } from "framer-motion";
import React, { useState } from "react";
import BioCard from "./components/bioCard";
import { bioCards } from "./components/bioCardList";
import InViewContainer from "../../animations/InViewContainer";

const SkillsAndBio = () => {
/*   const [context, setContext] = useState(false); */

  return (
    <>
      <div className="flex flex-col items-center bg-slate-200/60 backdrop-blur-sm text-slate-900  p-10 rounded-lg mt-32">
        <InViewContainer
          fromDirection="left"
          delay={0.15}
          className=" text-center sm:text-left text-xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2"
        >
          Skills <br className="hidden sm:block" /> &Bio
          <p className=" mb-6 text-lg font-medium">
            I&apos;m a front-end developer specializing in crafting exceptional
            user experiences through thoughtful UI/UX design and a focus on
            performance optimization. My passion for cutting-edge technologies
            drives my continuous learning and growth.
          </p>
        </InViewContainer>
      </div>
    </>
  );
};

export default SkillsAndBio;
