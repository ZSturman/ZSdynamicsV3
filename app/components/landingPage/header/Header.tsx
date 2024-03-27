import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import socialMediaLinks from "./socialLinks";

interface HeaderProps {
  controls: any;
}

const Header: FC<HeaderProps> = ({ controls }) => {

  useEffect(() => {
    controls.start("headerEnter");

    return () => {
      controls.stop();
    };
  }, [controls]);

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
        delay: 0.5,
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
    <div className="flex flex-col relative text-darkest-shade">
      <motion.div className="p-5 md:p-20">
        <motion.div
          className="w-full flex items-center text-lg md:text-xl lg:text-3xl xl:text-4xl justify-center font-urbanist-light"
          variants={jobTitleVariant}
          animate={controls}
          initial="init"
          exit="headerExit"
        >
          - Developer -
        </motion.div>

        <motion.div
          className="w-full flex items-center justify-center text-4xl md:text-6xl lg:text-7xl xl:text-7xl mb-5 md:mb-10 font-urbanist-light"
          animate={controls}
          variants={nameVariant}
          initial="init"
          exit="headerExit"
          //onClick={removeContent}
        >
          Zachary Sturman
        </motion.div>

        <motion.div className="w-full flex flex-row flex-wrap gap-8 md:gap-10 items-center justify-center">
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
                  className="text md:text-lg lg:text-2xl hover:cursor-pointer"
                >
                  <link.icon />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
