import {
  AnimationPlaybackControls,
  animate,
  useMotionValue,
  motion,
  useCycle,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface NavSvgComponentProps {}

const NavSvgComponent: React.FC<NavSvgComponentProps> = ({}) => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisible(!navVisible);
  };

  const bioVariants = {
    collapsed: {
      d: "M145.487 208.964C134.91 200.089 119.091 201.435 110.714 212.411C36.3079 309.911 -2.84753 430.086 0.161157 553.193C3.16984 676.301 48.149 794.419 127.23 888.168C136.132 898.722 151.998 899.293 162.129 889.912L422.603 648.711C432.734 639.329 433.105 623.602 425.75 611.917C412.871 591.457 405.638 567.772 405.04 543.298C404.442 518.825 410.51 494.814 422.374 473.75C429.149 461.719 428.01 446.029 417.433 437.154L145.487 208.964Z",
      
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    expanded: {
      d: "M426.312 549.946C412.557 551.15 402.163 563.384 405.806 576.702C412.447 600.985 425.602 623.173 444.059 640.749C462.515 658.324 485.319 670.38 509.897 675.827C523.377 678.815 535.089 667.835 535.619 654.038L537.705 599.737C538.235 585.94 526.013 574.709 516.015 565.187V565.187V565.187C506.016 555.666 494.202 544.007 480.447 545.21L426.312 549.946Z",
      
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    expand: {
      // New 'expand' variant
      d: "M426.312 549.946C412.557 551.15 402.163 563.384 405.806 576.702C412.447 600.985 425.602 623.173 444.059 640.749C462.515 658.324 485.319 670.38 509.897 675.827C523.377 678.815 535.089 667.835 535.619 654.038L537.705 599.737C538.235 585.94 526.013 574.709 516.015 565.187V565.187V565.187C506.016 555.666 494.202 544.007 480.447 545.21L426.312 549.946Z",
      
      transition: {
        type: "spring",
        stiffness: 300, // adjust if desired
        damping: 20, // adjust if desired
      },
    },
  };

  const studioVariants = {
    expanded: {
      d: "M549.946 653.688C551.15 667.443 563.384 677.837 576.702 674.194C600.985 667.553 623.173 654.398 640.749 635.942C658.324 617.485 670.38 594.681 675.827 570.103C678.815 556.623 667.835 544.911 654.038 544.381L599.737 542.295C585.94 541.765 574.709 553.987 565.187 563.985V563.985V563.985C555.666 573.984 544.007 585.799 545.21 599.553L549.946 653.688Z",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    collapsed: {
      d: "M208.964 934.513C200.089 945.09 201.435 960.909 212.411 969.286C309.911 1043.69 430.086 1082.85 553.193 1079.84C676.301 1076.83 794.419 1031.85 888.168 952.77C898.722 943.868 899.293 928.002 889.912 917.871L648.711 657.397C639.329 647.266 623.602 646.894 611.917 654.25C591.457 667.129 567.772 674.362 543.298 674.96C518.824 675.558 494.814 669.49 473.75 657.626C461.719 650.851 446.029 651.99 437.154 662.567L208.964 934.513Z",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const experienceVariants = {
    collapsed: {
      d: "M871.036 145.487C879.911 134.91 878.565 119.091 867.589 110.715C770.089 36.308 649.914 -2.8475 526.807 0.161187C403.699 3.16987 285.581 48.1491 191.832 127.23C181.278 136.132 180.706 151.999 190.088 162.129L431.289 422.603C440.67 432.734 456.398 433.106 468.083 425.75C488.543 412.872 512.228 405.638 536.702 405.04C561.175 404.442 585.186 410.51 606.25 422.374C618.281 429.149 633.971 428.01 642.846 417.433L871.036 145.487Z",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    expanded: {
      d: "M530.054 426.312C528.85 412.557 516.616 402.163 503.298 405.806C479.015 412.447 456.827 425.602 439.252 444.059C421.676 462.515 409.62 485.319 404.173 509.897C401.185 523.377 412.165 535.089 425.962 535.619L480.264 537.705C494.06 538.235 505.291 526.013 514.813 516.015V516.015V516.015C524.335 506.016 535.993 494.202 534.79 480.447L530.054 426.312Z",
      transition: {
        type: "spring",
        stiffness: 300,

        damping: 20,
      },
    },
  };

  const contactVariants = {
    expanded: {
      d: "M653.688 530.054C667.443 528.85 677.837 516.616 674.194 503.298C667.553 479.015 654.398 456.827 635.942 439.252C617.485 421.676 594.681 409.62 570.103 404.173C556.623 401.185 544.911 412.165 544.381 425.962L542.295 480.264C541.765 494.06 553.987 505.291 563.985 514.813V514.813V514.813C573.984 524.335 585.799 535.993 599.553 534.79L653.688 530.054Z",
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,

        damping: 20,
      },
    },
    collapsed: {

      rotate: 45,
      scale: 3.885,

      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };
  

  const toggleXVariants = {
    expanded: {
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    collapsed: {
      rotate: -45,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const toggleCircleVariants = {
    expanded: {
      r: 139.42,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    collapsed: {
      r: 540,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const rotate = useMotionValue(0);

  useEffect(() => {
    controlsRef.current = animate(rotate, 360, {
      repeat: Infinity,
      duration: 5,
      ease: "linear",
    });

    navVisible ? controlsRef.current?.stop() : controlsRef.current?.play();

    return () => {
      controlsRef.current?.stop();
    };
  }, [rotate, navVisible]);

  return (
    <>
      <motion.svg
        width="270"
        height="270 "
        viewBox="0 0 1080 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        onMouseLeave={() => {
          controlsRef.current?.play();
        }}
        onMouseEnter={() => {
          controlsRef.current?.pause();
        }}
      >
        <motion.circle
          id="bg"
          cx="540"
          cy="540"
          r="540"
          transform="rotate(-5 540 540)"
          fill="purple"
          variants={toggleCircleVariants}
          animate={navVisible ? "expanded" : "collapsed"}
        />

        <motion.path
          id="bioButton"
          animate={navVisible ? "expand" : "collapsed"} // Switch between variants
          variants={bioVariants}
          initial={navVisible ? "expand" : "collapsed"} // Set initial state
          d={navVisible ? bioVariants.expanded.d : bioVariants.collapsed.d}
          fill= "#5c7a8d"
        />
{/*         <motion.path
          id="contactButton"
          animate={navVisible ? "expanded" : "collapsed"}
          variants={contactVariants}
          initial="collapsed"
          fill="#5c7a8d"
        /> */}

<motion.path
          id="contactButton"
          d="M653.688 530.054C667.443 528.85 677.837 516.616 674.194 503.298C667.553 479.015 654.398 456.827 635.942 439.252C617.485 421.676 594.681 409.62 570.103 404.173C556.623 401.185 544.911 412.165 544.381 425.962L542.295 480.264C541.765 494.06 553.987 505.291 563.985 514.813V514.813V514.813C573.984 524.335 585.799 535.993 599.553 534.79L653.688 530.054Z"
          animate={navVisible ? "expanded" : "collapsed"}
          variants={contactVariants}
          initial="collapsed"
          fill="#5c7a8d"
        />



        <motion.path
          id="studioButton"
          animate={navVisible ? "expanded" : "collapsed"}
          variants={studioVariants}
          initial="collapsed"
          fill="green"
        />
        <motion.path
          id="experienceButton"
          animate={navVisible ? "expanded" : "collapsed"}
          variants={experienceVariants}
          initial="collapsed"
          fill="#22710F"
        />

        <motion.g
          className={`hover:cursor-pointer`}
          id="X"
          onClick={() => toggleNavVisibility()}
          variants={toggleXVariants}
          initial="collapsed"
          animate={navVisible ? "collapsed" : "expanded"}
        >
          <circle
            id="bg"
            cx="540"
            cy="540"
            r="139.42"
            transform="rotate(-50 540 540)"
            className="fill-transparent"
            fill="none"
          />
          <path
            id="Line 1"
            d="M601 601L479 479"
            stroke="white"
            stroke-width="14"
            stroke-linecap="round"
          />
          <path
            id="Line 2"
            d="M601 479L479 601"
            stroke="white"
            stroke-width="14"
            stroke-linecap="round"
          />
        </motion.g>
      </motion.svg>
    </>
  );
};

export default NavSvgComponent;
