"use client";
import LongStoryShort from "@/app/components/toggles/LongStoryShort";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BioCard from "./components/bioCard";
import { bioCards } from "./components/bioCardList";
import SkillCard from "./components/skillCard";
import skillsList from "./components/skillItems";
import InViewContainer from "../../animations/InViewContainer";

const SkillsAndBioSeeMore = () => {
  const [context, setContext] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const bioControls = useAnimationControls();

  useEffect(() => {
    bioControls.set("hidden");
    if (isInView) {
      bioControls.start("visible");
    }
  });

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full ">
          <div className="flex flex-col w-full bg-light-shade sm:bg-gradient-to-r from-light-shade from-30% to-light-accent to-30%">
            <div className="flex flex-row justify-center sm:px-5">
              {/* Image */}
              <InViewContainer fromDirection="left" delay={0.1} amount={.1} className="hidden sm:block w-1/3 h-full relative">
                
                  <div className="w-28 h-28 md:w-48 md:h-48 lg:w-96 lg:h-96 rounded-full bg-light-accent absolute top-0 left-0 overflow-hidden m-5 shadow-lg ">
                    <Image src="/ZsToon.png" fill alt="Toon" />
                  </div>
                  <div className="w-28 h-28 md:w-48 md:h-48 lg:w-96 lg:h-96 rounded-full border-4 border-dark-shade/50 absolute top-0 left-0 overflow-hidden m-9 shadow-lg" />
                  <div className="w-14 h-14 md:w-24 md:h-24 lg:w-48 lg:h-48 rounded-full bg-light-accent absolute top-0 left-0 overflow-hidden my-5 md:my-3 lg:my-0 mx-4 opacity-40 blur-md" />
              </InViewContainer>

              {/* Title */}
              <div
                className={`flex flex-col items-center flex-1 sm:justify-evenly  text-dark-shade md:backdrop-blur-lg p-3 mb-2 sm:m-5 sm:p-5 w-full sm:rounded-lg max-w-[900px] bg-opacity-90 `}
              >
                <InViewContainer
                  fromDirection="left"
                  delay={0.15}
                  className="w-full text-center sm:text-left text-xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2"
                >
                  Skills <br className="hidden sm:block" /> &Bio
                  <div className="">
                    <p className="hidden sm:block mb-6 text-lg font-medium">
                      I&apos;m a front-end developer specializing in crafting
                      exceptional user experiences through thoughtful UI/UX
                      design and a focus on performance optimization. My passion
                      for cutting-edge technologies drives my continuous
                      learning and growth.
                    </p>
                  </div>
                </InViewContainer>

                <InViewContainer
                  fromDirection="top"
                  delay={0.5}
                  duration={0.25}
                  className="w-full flex flex-row items-start justify-start z-20 mb-2"
                >
                  <LongStoryShort context={context} setContext={setContext} />
                </InViewContainer>
              </div>
            </div>

            <motion.div className="flex flex-col mt-2 md:mt-36 gap-4">
              {bioCards.filter((bioCard) => bioCard.category === "experience")
                .length > 0 && (
                <div className="w-full flex flex-col">
                  <InViewContainer>
                    <div className="hidden md:block pr-[71%] text-right">
                      Experience
                    </div>
                    <div className="hidden md:flex w-full justify-center">
                      <div className="border-b-2 border-dark-shade w-3/5" />
                    </div>
                  </InViewContainer>
                  {bioCards.map((bioCard, index) =>
                    bioCard.category === "experience" ? (
                      <InViewContainer key={index} fromDirection="right">
                        <BioCard context={context} bioCard={bioCard} />
                      </InViewContainer>
                    ) : null
                  )}
                </div>
              )}

              {bioCards.filter(
                (bioCard) => bioCard.category === "certification"
              ).length > 0 && (
                <div className="w-full flex flex-col">
                  <div className="hidden md:block pr-[71%] text-right">
                    Certifications
                  </div>
                  <div className="w-full hidden md:flex justify-center">
                    <div className="border-b-2 border-dark-shade w-3/5" />
                  </div>
                  {bioCards.map((bioCard, index) =>
                    bioCard.category === "certification" ? (
                      <InViewContainer key={index} fromDirection="right">
                        <BioCard context={context} bioCard={bioCard} />
                      </InViewContainer>
                    ) : null
                  )}
                </div>
              )}

              {bioCards.filter((bioCard) => bioCard.category === "education")
                .length > 0 && (
                <div className="w-full flex flex-col">
                  <div className="hidden md:block pr-[71%] text-right">
                    Education
                  </div>
                  <div className="w-full hidden md:flex justify-center">
                    <div className="border-b-2 border-dark-shade w-3/5" />
                  </div>
                  {bioCards.map((bioCard, index) =>
                    bioCard.category === "education" ? (
                      <InViewContainer key={index} fromDirection="right">
                        <BioCard context={context} bioCard={bioCard} />
                      </InViewContainer>
                    ) : null
                  )}
                </div>
              )}
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-2 md:gap-4 bg-light-accent px-1 md:px-5 items-start justify-start sm:items-center sm:justify-center border-t-2 border-t-dark-shade py-2 md:py-10 ">
            <div className="flex flex-row w-full justify-center">
              <h1>Technical Proficiencies</h1>
            </div>
            {skillsList.map((skill, index) => (
              <InViewContainer
                key={index}
                delay={index * 0.02}
                fromDirection="top"
              >
                <SkillCard {...skill} />
              </InViewContainer>
            ))}
          </div>
          <div className="w-full h-10 bg-light-accent"></div>
        </div>
      </div>
    </>
  );
};

export default SkillsAndBioSeeMore;
