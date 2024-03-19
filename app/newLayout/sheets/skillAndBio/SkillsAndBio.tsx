import LongStoryShort from "@/app/components/LongStoryShort";
import React, { useState } from "react";

const SkillsAndBio = () => {
  const [context, setContext] = useState(true);

  return (
    <>
      {/* Bio Top */}
      <div className="flex flex-row gap-0 items-center justify-center bg-slate-600 ">
        {/* Left */}
        <div className="w-2/5 text-center">image</div>
        {/* right */}
        <div className="flex flex-col items-center w-3/5 justify-evenly bg-slate-800 p-5">
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
          <div className="w-full flex flex-row items-right justify-between">
            <div className="w-3/4"></div>
            <LongStoryShort context={context} setContext={setContext} />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-2 bg-slate-900"></div>
      {/* Skills */}
      <div className="flex flex-row items-center justify-between w-full py-5">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-20 h-20 bg-slate-300 rounded-lg"></div>
          <div>1</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-20 h-20 bg-slate-300 rounded-lg"></div>
          <div>2</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-20 h-20 bg-slate-300 rounded-lg"></div>
          <div>3</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-20 h-20 bg-slate-300 rounded-lg"></div>
          <div>4</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-20 h-20 bg-slate-300 rounded-lg"></div>
          <div>5</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="w-20 h-20 bg-slate-300 rounded-lg"></div>
          <div>6</div>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-1 bg-slate-900"></div>
      {/*Bullets */}

      {/* 
              
              Animate Presence 
  
              add exit={{}} to Context items
              
              */}
      <div className="flex flex-col w-full gap-5 p-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold mb-4">Academic Achievements</h2>

          {context && (
            <div>
              {" "}
              <p className="text-base">
                My educational background includes a Bachelor of Science in
                Media Communication from Full Sail University. I&apos;m
                committed to lifelong learning, holding certifications in data
                analytics and cloud computing to stay ahead in a rapidly
                changing field.
              </p>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Career Highlights</h2>

          {context && (
            <div>
              {" "}
              <p className="text-base">
                Throughout my career, I&apos;ve spearheaded the development of
                AI-driven applications, revamped digital strategies for greater
                impact, and created impactful data visualizations. I thrive on
                delivering tangible results that align with business objectives.
              </p>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>

          {context && (
            <div>
              {" "}
              <p className="text-base">
                My core strengths lie in front-end development, with expertise
                in NextJS, React, TypeScript, and a solid grasp of CSS
                frameworks and state management. I&apos;m passionate Bio UI/UX
                design, using tools like Figma and SketchBook to build
                user-centered interfaces. Performance optimization is always top
                of mind, ensuring fast and responsive web experiences. My
                background in backend support, CI/CD, and AI tools broadens my
                full-stack capabilities.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SkillsAndBio;
