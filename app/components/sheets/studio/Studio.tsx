import StudioCard from "./studio/StudioCard";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "Project One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "Go to One",
    image: "/next.svg",
    color: "#00B4F5",
  },
  {
    id: "2",
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "Go to Two",
    image: "/vercel.svg",
    color: "#FF0080",
  },
  {
    id: "3",
    title: "Project Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "Go to Three",
    image: "/next.svg",
    color: "black",
  },
];

const publish = true;

const Studio = () => {
  return publish ? (
    <div className="w-full h-full">
      <h1 className="text-center text-3xl m-3">Projects</h1>
      <div className="w-full h-full flex flex-row justify-center items-center">
        <StickyScroll projects={projects.map((project) => ({ project }))} />
      </div>
    </div>
  ) : (
    <>
      <div className="w-full h-96 flex items-center justify-center ">
        <h1 className="text-2xl">Under Construction</h1>
      </div>
    </>
  );
};

export default Studio;

interface StudioCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    link: string;
    image: string;
    color: string;
  };
}

const StickyScroll = ({ projects }: { projects: StudioCardProps[] }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = projects.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = projects.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="max-w-[900px] w-[250px] sm:w-[500px] md:w-[750px] lg:w-[900px] rounded-xl shadow-lg">
      <motion.div
        className={`h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-2 md:p-10 `}
        style={{ backgroundColor: projects[activeCard].project.color }}
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {projects.map((project, index) => (
              <div key={project.project.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {project.project.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {project.project.description}
                </motion.p>

                <motion.button
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {project.project.link ?? null}
                </motion.button>
              </div>
            ))}
            <div className="h-20" />
          </div>
        </div>
        <motion.div className="hidden md:block h-96 w-96 rounded-md shadow-lg sticky top-0 bg-slate-100/20 overflow-hidden">
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src={projects[activeCard].project.image}
              alt="Project Image"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
