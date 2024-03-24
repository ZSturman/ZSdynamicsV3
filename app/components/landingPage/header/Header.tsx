import { FC, use, useEffect, useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import socialMediaLinks from "./socialLinks";
import ThemeToggle from "@/app/components/ToggleTheme";
import { useScrollContext } from "@/app/context/scrollContext";

interface HeaderProps {
  controls: any;
}

const Header: FC<HeaderProps> = ({ controls }) => {
  const { scrollYProgress } = useScrollContext();

  useEffect(() => {
    controls.start("headerEnter");
  }, [controls]);



  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.01, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 1, 0]);
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 2]);
  const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, .2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const jobTitleVariant = {
    init: {
      opacity: 0,
      scaleX: 0,
    },
    headerEnter: {
      opacity: 1,
      scaleX: 1,
      transition: {
        delay: 1,
        duration: 2,
        type: "spring",
        stiffness: 120,
      },
    },
    headerExit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
      },
    },
  };
  const nameVariant = {
    init: {
      opacity: 0,
      scaleY: 0,
    },
    headerEnter: {
      opacity: 1,
      scaleY: 1,
      transition: {
        delay: .5,
        duration: 1,
        ease: "easeOut",
      },
    },
    headerExit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
      },
    },
  };

  const socialLinksVariantChildren = {
    init: {
      opacity: 0,
      scaleY: 0,
      y: -100,
    },
    headerEnter: (index: number) => ({
      opacity: 1,
      scaleY: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: index * 0.1 + 1.25,
      },
    }),
  };


  return (
    <div className="flex flex-col relative h-full">
      <motion.div className="p-5 md:p-20" 
      style={{ scale, opacity, scaleX, scaleY, y}}
      >
        <motion.div
          className="w-full flex items-center text-5xl justify-center font-urbanist-light"
          variants={jobTitleVariant}
          animate={controls}
          initial="init"
          exit="headerExit"
    
        >
          - Developer -
        </motion.div>

        <motion.div className="w-full flex items-center justify-center text-9xl mb-5 md:mb-10 font-urbanist-light"
        animate={controls}
        variants={nameVariant}
        initial="init"
        exit="headerExit"
        >
          Zachary Sturman
        </motion.div>

        <motion.div className="w-full flex flex-row flex-wrap gap-8 md:gap-10 items-center justify-center" >
          {socialMediaLinks.map((link, index) => {
            return (
              <motion.div
                className="flex items-center justify-center hover:cursor-pointer"
                key={index}
                variants={socialLinksVariantChildren}
                initial="init"
                animate={controls}
                custom={index}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg md:text-2xl hover:cursor-pointer"
                >
                  <link.icon />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="absolute top-0 right-0 p-5">
        <ThemeToggle />
      </div>
      </motion.div>


    </div>
  );
};

export default Header;
