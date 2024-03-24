type baseTransitionType = {
  delay?: number;
  duration?: number;
  ease?: number[] | string;
  times?: number[];
};

const baseTransition = (
  times?: number[],
  delay?: number,
  duration?: number,
  ease?: number[] | string
): baseTransitionType => {
  return {
    times: times || [0, 1],
    delay: delay || 0,
    duration: duration || 2,
    ease: ease || "easeInOut",
  };
};

type zGroup = {
  zIndex: number;
  variants: {
    init: {
      scale: number;
      filter: string;
      y?: number;
      scaleY?: number;
    };
    final: {
      scale: number;
      filter: string[] | string;
      y?: number;
      scaleY?: number;
      transition: baseTransitionType;
    };
  };
  leftGroup: {
    g: {
      paths: {
        fill?: string;
        stroke: string;
        d: string;
        variants?: {
          day?: {};
          night?: {};
        };
      }[];
      variants: {
        init: {
          x?: number | string;
          y?: number;
          fill?: string;
        };
        final: {
          x?: number | string;
          y?: number;
          transition: baseTransitionType;
          fill?: string;
        };
        exit: {
          fill?: string;
          transition: baseTransitionType;
        };
      };
    };
  };
  rightGroup: {
    width?: number;
    height?: number;
    g: {
      paths: {
        fill?: string;
        stroke: string;
        d: string;
        variants?: {
          day?: {};
          night?: {};
        };
      }[];
      variants: {
        init: {
          x?: number | string;
          y?: number | string;
          fill?: string;
        };
        final: {
          x?: number | string;
          y?: number | string;
          transition: baseTransitionType;
          fill?: string;
        };
        exit: {
          fill?: string;
          transition: baseTransitionType;
        };
      };
    };
  };
};

interface Colors {
  [key: string]: {
    day: string;
    night: string;
  };
}

const colors: Colors = {
  lushGreen: {
    day: "#2b664f",
    night: "#0f251f",
  },

  springGreen: {
    day: "#77DD77",
    night: "#336633",
  },

  yellowingGreen: {
    day: "#C6CE4A",
    night: "#4e5525",
  },

  driedGrass: {
    day: "#999966",
    night: "#525239",
  },

  darkBrown: {
    day: "#40291D",
    night: "#25180f",
  },

  reddishBrown: {
    day: "#774433",
    night: "#3c2018",
  },

  muddyBrown: {
    day: "#674A38",
    night: "#3b2a1d",
  },

  clay: {
    day: "#B97A57",
    night: "#734b33",
  },

  beachSand: {
    day: "#F4E1C1",
    night: "#aba08a",
  },

  desertSand: {
    day: "#E2CA76",
    night: "#9a8152",
  },

  goldenSand: {
    day: "#EDC9AF",
    night: "#ada17a",
  },

  tan: {
    day: "#D2B48C",
    night: "#8c7251",
  },

  gravel: {
    day: "#888888",
    night: "#4d4d4d",
  },

  gravel1: {
    day: "#AFA59A",
    night: "#63584c",
  },

  rocks: {
    day: "#708090",
    night: "#3c4d59",
  },
};

const getColorVariant = (color: string) => {
  return {
    day: {
      fill: colors[color].day,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
    night: {
      fill: colors[color].night,
      transition: {
        duration: 1,
      },
    },
  };
};

const z45Variant: zGroup = {
  zIndex: -45,
  variants: {
    init: {
      scale: 1.1,
      filter: "blur(2px)",
      y: 20,
    },
    final: {
      scale: 1,
      filter: ["blur(2px)", "blur(10px)"],
      y: 0,
      transition: baseTransition(),
    },
  },
  leftGroup: {
    g: {
      paths: [
        {
          fill: "#D0D0D0",
          stroke: "none",
          d: "m0 381 28-3 23-21 23-6 23 10h20l16 11 16 21 43-5 30 9 16-4 24 15 23 6h23l19 11 25-6 41 20 55-5 26 11h37l24 11 30 37h35l18 6 23-12 27 6 17-6 19 25 33 13 3 19-25 17-150 15L0 599V381Z",
          variants: getColorVariant("gravel"),
        },
      ],
      variants: {
        init: {
          x: -15,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          stroke: "none",
          d: "m1269 447 22-21 33 2 36-24 55-4 65-32 12 18h19l21-10 37 12 10-34 11-5 20 5 37-23 14-19 19-11 9-10 16-5 15 12 8 27v369l-262-14-165-101-225-14-191-9v-12l-6-7 6-10 8-15 9-10 37-4 7-5 15 1 6-12 17-4 20 4h17l10-15 16-5 13 10 13-2 28-24h13l18 12 14 7 14-3 15 6 30-36 28 7 12-7 14 7 10 8Z",
          variants: getColorVariant("gravel"),
        },
      ],
      variants: {
        init: {
          x: 15,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
};

const z40Variant: zGroup = {
  zIndex: -40,
  variants: {
    init: {
      scale: 1.1,
      filter: "blur(0px)",
      y: 20,
    },
    final: {
      scale: 1,
      filter: ["blur(0px)", "blur(10px)"],
      y: 0,
      transition: baseTransition(),
    },
  },
  leftGroup: {
    g: {
      paths: [
        {
          stroke: "none",
          d: "m0 422 55-17 56 28h87l36 44 43 21 58-8 57-29 36 16 88-16 24 29 58-13 58 50 35-16 36 16 39-10 32 10h34l6 31 51 8-19 18-83 11-96-11-25 47-115-36-112 22-59 50-45 113v121L0 890V422Z",
          variants: getColorVariant("lushGreen"),
        },
      ],
      variants: {
        init: {
          x: -15,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("lushGreen"),
          stroke: "none",
          d: "m1493 452 35-15 48 5 28-22 12 19 51-6 36-52 25-2v286h-235l-239-87-137-11H984l-32-11 14-31 30-10 60-27 50 9 42-9 36 9 80-21 105 12 63-36h61Z",
        },
      ],
      variants: {
        init: {
          x: 15,
        },
        final: {
          x: 0,

          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
};

const z35Variant: zGroup = {
  zIndex: -35,
  variants: {
    init: {
      scale: 1.1,
      filter: "blur(3px)",
      y: 30,
    },
    final: {
      scale: 1,
      filter: ["blur(3px)", "blur(0px)", "blur(10px)"],
      y: 0,
      transition: baseTransition([0, 0.12, 1]),
    },
  },
  leftGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("springGreen"),
          stroke: "none",
          d: "m0 477 36 7 36 9h30l33-16 36 7 46-7 39-33 16-13h20l10 13 37 11 30 29 20 21 25 12h28l36-12 35 12 13 18 25 6h39l19 20 11 28 48-8h100l61 3 14 8v11l-35-5-40 8h-22l-19 9-44 6-39 14H544l-53-14-62-11-117-12-67-11-74 11-24-11-20-21-5-25-24-14-68 14-30 4v-68Z",
        },
      ],
      variants: {
        init: {
          x: -20,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("clay"),
          stroke: "none",
          d: "m1598 516 40-15 38-35 52-19v167l-330-6-64-6-38-26-55 17-51 9-50-5-49 14-44-3-25-11 50-21-47-16-3 11-42-15h-37l-9-13 16-15h21l17-13h23l21-11 34-3 14 23 19 4h22l15-8 26 17h25l18-3h16l31 9 39 17 110-32 69-20 52 8 40-8 36 8Z",
        },
      ],
      variants: {
        init: {
          x: 20,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
};

const z30Variant: zGroup = {
  zIndex: -30,
  variants: {
    init: {
      scale: 1.1,
      filter: "blur(25px)",
      y: 40,
    },
    final: {
      scale: 1,
      filter: ["blur(25px)", "blur(0px)", "blur(5.5px)"],
      y: 0,
      transition: baseTransition([0, 0.24, 1]),
    },
  },

  leftGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("yellowingGreen"),
          stroke: "none",
          d: "m3 428 122 68 58 46h111l72 25 59-22 57 15 52-15 30 15 24 38-39 38-77 19L-4 959l7-531Z",
        },
      ],
      variants: {
        init: {
          x: -25,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("yellowingGreen"),
          stroke: "none",
          d: "m1234 532 11 15 15 8 14-16 45-11 7-17 12-8 10 8 17 2 8-10 12 8 22-2 8-22 8 7h10l16-17 9-14 14 5 7-5 16 7 16 24 4 21 8 4-5 35 5 22h205v107h-415l-246-35-48-10-34-7-32-15h-32l-6-19 38-11 8-10h53l53 17 51-17 44-7 35-25 18-10 19-2Z",
        },
      ],
      variants: {
        init: {
          x: 25,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
};

const z25Variant: zGroup = {
  zIndex: -25,
  variants: {
    init: {
      scale: 1.1,
      filter: "blur(30px)",
      y: 50,
    },
    final: {
      scale: 1,
      filter: ["blur(30px)", "blur(0px)", "blur(5px)"],
      y: 0,
      transition: baseTransition([0, 0.36, 1]),
    },
  },

  leftGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("driedGrass"),
          stroke: "none",
          d: "m0 477 36 7 36 8h30l33-15 36 7 46-7 39-34 16-13h20l10 13 37 12 30 29 20 21 25 11h28l36-11 35 11 13 18 25 6h39l19 20 11 28 48-7h100l61 2 14 9v10l-35-5-40 8h-22l-19 9-44 7-39 14H544l-53-14-62-11-117-13-67-10-74 10-24-10-20-21-5-26-24-13-68 13-30 5v-68Z",
        },
      ],
      variants: {
        init: {
          x: -30,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("driedGrass"),
          stroke: "none",
          d: "m1402 530 48-10 25-9 36 9 52-13 54 5 43-26 12-18 32-15h23v164l-296-7-63-17-80-12-42 12h-35l-15 6-29 4-31-4-42 11h-45l-23-7 8-14 28-6 12-9-12-3h-17l-19-8-8 6-22-9-25-2-12-7-17 1-5-6 4-16 30-4 14-11 28-4 18-6 18 2 20-7 5 20 20 10h26l16-10 24 10 14 8h48l36 8 27 12h55l45-12 17-16Z",
        },
      ],

      variants: {
        init: {
          x: 30,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
};

const z20Variant: zGroup = {
  zIndex: -20,
  variants: {
    init: {
      scale: 1.1,
      filter: "blur(35px)",
      y: 60,
    },
    final: {
      scale: 1,
      filter: ["blur(35px)", "blur(0px)", "blur(4.5px)"],
      y: 0,
      transition: baseTransition([0, 0.64, 1]),
    },
  },
  leftGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("reddishBrown"),
          stroke: "none",
          d: "m551 707 34-34 185-35 105-6 13 24-38 4-37 13h-43l-14 13-35-3-15 12-30-6-30 9-34-3-30 12 3 31-8 18-14-6-12-43Z",
        },
        {
          variants: getColorVariant("muddyBrown"),
          stroke: "none",
          d: "m245 724-31-37 82-18 50 13 48-7 45-10 52-26 44-23 60-7 48-15 38 6 35-6h52l25 12h31l18 17 38 8-4 13-48 7-47-7-18 17-54 11-114 3-34 42 19 30-19 21-64 22h-44l-35-8-70 19-75-7-24-26-4-44Z",
        },
      ],
      variants: {
        init: {
          x: -35,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("muddyBrown"),
          stroke: "none",
          d: "m1031 623 38-3 32 10 44-4 50-9 23 6 21 21 24-14 32 3 32-13 14 18h24l47 7 17 13h27l64 8 19-12 16-5 19-26 35-7 33-22 54-12 32 4v200h-89l-37-4-47-13-19-8-27 3-23-3-27 3-42 14-43 8h-24l-23-4-16-2-16-10-9-9-4-13-15-11h-30l-22-14-20-8-22 2-24-9-33 2-28-13-19-22-16-5-16-9-14-12h-24l-14-5 20-14 11-10 15 3Z",
        },
      ],
      variants: {
        init: {
          x: 35,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
};

const z15Variant: zGroup = {
  zIndex: -15,
  variants: {
    init: {
      scale: 1.1,
      filter: "blur(40px)",
      y: 70,
    },
    final: {
      scale: 1,
      filter: ["blur(40px)", "blur(0px)", "blur(4px)"],
      y: 0,
      transition: baseTransition([0, 0.72, 1]),
    },
  },
  leftGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("clay"),
          stroke: "none",
          d: "m0 594 39 14 22 26h39l20 15 22 6 10 16 13 6h35l29 10h35l17 22 23 18 33 6 27 38 75-4 100 6 178 17 30 9 6 12-19 19-39 13-70 17-70 10-62 10-58 2-71 14-68 8-108 31-42 31-55 19-51 14-40-4V594Z",
        },
      ],
      variants: {
        init: {
          x: -45,
        },
        final: {
          x: 0,

          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("clay"),
          stroke: "none",
          d: "m746 732-22-5 11-8h13l13-13 39-3 45-4 44-12 81-15 84-3 135 12 33 18h50l15 17 26 11 19 16 30 13 14 25-29 25-40 9-39 21-43 9-36 27-50 14-39 20-34-4-20-8 4-26-13-7 9-20-7-16-4-15-13-15-21-11-17-8-12-14-21-1-19-9h-11l-11-4-25-2-30-5-48 2-26-8-35-3Z",
        },
      ],
      variants: {
        init: {
          x: 40,
        },
        final: {
          x: 0,

          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
};

const z10Variant: zGroup = {
  zIndex: -10,
  variants: {
    init: {
      scale: 1.1,
      filter: "blur(45px)",
      y: 80,
      scaleY: 1.5,
    },
    final: {
      scale: 1,
      filter: ["blur(45px)", "blur(0px)", "blur(3.5px)"],
      y: 0,
      scaleY: 1,
      transition: baseTransition([0, 0.88, 1]),
    },
  },

  leftGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("beachSand"),
          stroke: "none",
          d: "m770 817 31-4 17 4h21l17 8-24 16-31 5-20 15-46 17-61 36-60 19-31 21-36 12-16 19-58 24-68 38-61 67-43-14 114-143 355-140Z",
        },
        {
          stroke: "none",
          d: "m-20 951 76-3 95-30 75-35 97-35 285-38 76 2 64-11 34 9 23 12-23 16-24 6-22 13-22 4-16 18-27 10-49 15-17 18-44 12-36 37-41 19-9 14-71 34-60 79-25 164-357 4 18-334Z",
          variants: getColorVariant("desertSand"),
        },
      ],
      variants: {
        init: {
          x: -45,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          variants: getColorVariant("beachSand"),
          stroke: "none",
          d: "m1191 980 538-249v101l-66 22-56 9-85 16-51 18-43 11-31 18-21 5-27 12-14 12-24 11-16 8-23 6-17 8-29 5-35-13Z",
        },
        {
          variants: getColorVariant("desertSand"),
          stroke: "none",
          d: "m866 942 23-39 47-35 205-37 404-92h184v62l-23 3-39 15-39 19-39 5-19 16h-22l-46 11-32 6-52 27-67 22-59 40-68 30-36 9-37-14-50 5-55-10H936l-52-17-18-26Z",
        },
      ],
      variants: {
        init: {
          x: 45,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
};

const z5Variant: zGroup = {
  zIndex: -5,
  variants: {
    init: {
      scale: 1.1,
      filter: "blur(50px)",
      y: 100,
    },
    final: {
      scale: 1,
      filter: ["blur(50px)", "blur(2px)"],
      y: 0,
      transition: baseTransition(),
    },
  },

  leftGroup: {
    g: {
      paths: [],
      variants: {
        init: {
          x: -50,
        },
        final: {
          x: 0,
          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          stroke: "none",
          d: "m1597 922 132-50v252l-53-9-63-36-58-8-58-19-66-23-24-19-28-4-11-13 11-17 34-12 109-33 75-9Z",
          variants: getColorVariant("goldenSand"),
        },
      ],
      variants: {
        init: {
          x: -50,
        },
        final: {
          x: 0,

          transition: baseTransition(),
        },
        exit: {
          transition: baseTransition(),
        },
      },
    },
  },
};

const landscapeBGReversed = [
  z45Variant,
  z40Variant,
  z35Variant,
  z30Variant,
  //z25Variant,
  z20Variant,
  z15Variant,
  z10Variant,
  z5Variant,
];

export default landscapeBGReversed;
