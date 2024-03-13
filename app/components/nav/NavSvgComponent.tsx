"use client";
import {
  SelectedContentType,
  usePortfolio,
} from "@/app/context/contextProvider";
import {
  AnimationPlaybackControls,
  animate,
  useMotionValue,
  motion,
  useCycle,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaPersonFalling } from "react-icons/fa6";
import { WiAlien } from "react-icons/wi";
import { TfiBriefcase } from "react-icons/tfi";
import { RiFilePaper2Line } from "react-icons/ri";

interface NavSvgComponentProps {}

const transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

const commonVariants = (expandedProps: any, collapsedProps: any) => ({
  expanded: { ...expandedProps, transition },
  collapsed: { ...collapsedProps, transition },
});

const NavSvgComponent: React.FC<NavSvgComponentProps> = ({}) => {
  const { setSelectedContent } = usePortfolio();
  const [navVisible, setNavVisible] = useState(false);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const rotate = useMotionValue(0);

  const toggleNavVisibility = () => setNavVisible(!navVisible);

  useEffect(() => {
    controlsRef.current = animate(rotate, 360, {
      repeat: Infinity,
      duration: 25,
      ease: "linear",
    });

    if (navVisible) {
      controlsRef.current?.play();
    } else {
      controlsRef.current?.stop();
    }

    return () => controlsRef.current?.stop();
  }, [rotate, navVisible]);

  const circleVariants = commonVariants(
    { r: 139.42, opacity: 1 },
    { r: 540, opacity: 0 }
  );
  const pathVariantProps = { scale: 0.25, rotate: -45, opacity: 0 };
  const bioVariant = commonVariants(
    { ...pathVariantProps, x: 275, y: 50 },
    { scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 }
  );
  const contactVariant = commonVariants(
    { ...pathVariantProps, x: -275, y: -50 },
    { scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 }
  );
  const studioVariant = commonVariants(
    { ...pathVariantProps, x: 50, y: -275 },
    { scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 }
  );
  const experienceVariant = commonVariants(
    { ...pathVariantProps, x: -50, y: 275 },
    { scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 }
  );
  const toggleXVariants = commonVariants({ rotate: 0 }, { rotate: -45 });

  const handleNavSliceClicked = (section: SelectedContentType) => {
    setSelectedContent(section);
    setNavVisible(false);
  };

  return (
    <>
      <motion.svg
        width="270"
        height="270"
        viewBox="0 0 1080 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <motion.circle
          id="bg"
          cx="540"
          cy="540"
          r="10"
          transform="rotate(-5 540 540)"
          fill="gray"
          variants={circleVariants}
          animate={!navVisible ? "expanded" : "collapsed"}
          className="shadow-2xl"
        
        />
        <motion.g
          style={{ rotate }}
          onMouseLeave={() => controlsRef.current?.play()}
          onMouseEnter={() => controlsRef.current?.pause()}
        >
          <motion.g
            animate={!navVisible ? "expanded" : "collapsed"}
            variants={bioVariant}
            initial={!navVisible ? "expanded" : "collapsed"}
            className={`hover:cursor-pointer`}
            onClick={() => handleNavSliceClicked("bio")}
          >
            <path
              id="bioButton"
              d="M145.487 208.964C134.91 200.089 119.091 201.435 110.714 212.411C36.3079 309.911 -2.84753 430.086 0.161157 553.193C3.16984 676.301 48.149 794.419 127.23 888.168C136.132 898.722 151.998 899.293 162.129 889.912L422.603 648.711C432.734 639.329 433.105 623.602 425.75 611.917C412.871 591.457 405.638 567.772 405.04 543.298C404.442 518.825 410.51 494.814 422.374 473.75C429.149 461.719 428.01 446.029 417.433 437.154L145.487 208.964Z"
              fill="black"
              filter="drop-shadow(0px 4px 40px rgba(255, 0, 255, 0.5))"
            />
            <motion.text
              fill="black"
              stroke="white"
              strokeWidth="2"
              className="text-9xl hidden hover:visible"
              textAnchor="middle"
              x="200"
              y="540"
            >
              Bio
            </motion.text>
            <FaPersonFalling
              className="text-9xl text-dark-shade dark:text-light-shade "
              x="200"
              y="540"
            />
          </motion.g>

          <motion.g
            className={`hover:cursor-pointer`}
            onClick={() => handleNavSliceClicked("contact")}
            animate={!navVisible ? "expanded" : "collapsed"}
            variants={contactVariant}
            initial={!navVisible ? "expanded" : "collapsed"}
            filter="drop-shadow(0px 4px 40px rgba(, 255, 255, 0.5))"
          >
            <path
              id="contactButton"
              d="M934.513 871.036C945.09 879.911 960.909 878.565 969.286 867.589C1043.69 770.089 1082.85 649.914 1079.84 526.807C1076.83 403.699 1031.85 285.581 952.77 191.832C943.868 181.278 928.002 180.707 917.871 190.088L657.397 431.289C647.266 440.671 646.894 456.398 654.25 468.083C667.128 488.543 674.362 512.228 674.96 536.702C675.558 561.175 669.49 585.186 657.626 606.25C650.851 618.281 651.99 633.971 662.567 642.846L934.513 871.036Z"
              fill="black"
            />
            <WiAlien
              className="text-9xl text-dark-shade dark:text-light-shade "
              x="800"
              y="540"
            />
          </motion.g>

          <motion.g
            animate={!navVisible ? "expanded" : "collapsed"}
            variants={studioVariant}
            initial={!navVisible ? "expanded" : "collapsed"}
            className={`hover:cursor-pointer`}
            onClick={() => handleNavSliceClicked("studio")}
            filter="drop-shadow(0px 4px 40px rgba(255, 255, 255, 0.5))"
          >
            <path
              id="studioButton"
              d="M208.964 934.513C200.089 945.09 201.435 960.909 212.411 969.286C309.911 1043.69 430.086 1082.85 553.193 1079.84C676.301 1076.83 794.419 1031.85 888.168 952.77C898.722 943.868 899.293 928.002 889.912 917.871L648.711 657.397C639.329 647.266 623.602 646.894 611.917 654.25C591.457 667.129 567.772 674.362 543.298 674.96C518.824 675.558 494.814 669.49 473.75 657.626C461.719 650.851 446.029 651.99 437.154 662.567L208.964 934.513Z"
              fill="black"
            />
            <RiFilePaper2Line
              className="text-9xl text-dark-shade dark:text-light-shade "
              x="475"
              y="775"
            />
          </motion.g>

          <motion.g
            animate={!navVisible ? "expanded" : "collapsed"}
            variants={experienceVariant}
            initial={!navVisible ? "expanded" : "collapsed"}
            className={`hover:cursor-pointer`}
            onClick={() => handleNavSliceClicked("experience")}
            filter="drop-shadow(10px -4px 40px rgba(255, 0, 0, 0.5))"
          >
            <path
              id="experienceButton"
              d="M871.036 145.487C879.911 134.91 878.565 119.091 867.589 110.715C770.089 36.308 649.914 -2.8475 526.807 0.161187C403.699 3.16987 285.581 48.1491 191.832 127.23C181.278 136.132 180.706 151.999 190.088 162.129L431.289 422.603C440.67 432.734 456.398 433.106 468.083 425.75C488.543 412.872 512.228 405.638 536.702 405.04C561.175 404.442 585.186 410.51 606.25 422.374C618.281 429.149 633.971 428.01 642.846 417.433L871.036 145.487Z"
              fill="black"
            />
            <TfiBriefcase
              className="text-9xl text-dark-shade dark:text-light-shade "
              x="475"
              y="150"
            />
          </motion.g>
        </motion.g>

        <motion.g
          className={`hover:cursor-pointer `}
          id="X"
          onClick={() => toggleNavVisibility()}
          variants={toggleXVariants}
          initial={!navVisible ? "expanded" : "collapsed"}
          animate={!navVisible ? "collapsed" : "expanded"}
          whileHover={{ scale: 1.2, shadow: "0px 10px 10px rgba(0, 0, 0, 0.5)"}}
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))"
        >
          <circle
            id="bg"
            cx="540"
            cy="540"
            r="139.42"
            transform="rotate(-50 540 540)"
            className="fill-transparent"
          />
          <path
            id="Line 1"
            d="M601 601L479 479"
            stroke="white"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            id="Line 2"
            d="M601 479L479 601"
            stroke="white"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </motion.g>
      </motion.svg>
    </>
  );
};

export default NavSvgComponent;
