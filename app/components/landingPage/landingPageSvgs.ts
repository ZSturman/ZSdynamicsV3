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
        fill: string;
        stroke: string;
        d: string;
      }[];
      variants: {
        init: {
          x: number;
          y?: number;
        };
        final: {
          x: number;
            y?: number;
          transition: baseTransitionType;
        };
      };
    };
  };
  rightGroup: {
    g: {
      paths: {
        fill: string;
        stroke: string;
        d: string;
      }[];
      variants: {
        init: {
          x: number;
          y?: number;
        };
        final: {
          x: number;
          y?: number;
          transition: baseTransitionType;
        };
      };
    };
  };
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
          fill: "purple",
          stroke: "none",
          d: "M-5 204L2290 558H-5V204Z",
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
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          fill: "purple",
          stroke: "none",
          d: "M2290 204L3.68598e-05 558H2290V204Z",
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
          fill: "blue",
          stroke: "none",
          d: "M491.175 227L967.35 581.075H0L491.175 227Z",
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
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          fill: "blue",
          stroke: "none",
          d: "M1759.35 227L2235.53 581.075H1268.18L1759.35 227Z",
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
          fill: "yellow",
          stroke: "none",
          d: "M290.803 318L596.339 615.599H-14.7334L290.803 318Z",
        },
        {
          fill: "yellow",
          stroke: "none",
          d: "M792.197 318L1097.73 615.599H486.661L792.197 318Z",
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
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          fill: "gray",
          stroke: "none",
          d: "M1495.8 318L1190.27 615.599H1801.34L1495.8 318Z",
        },
        {
          fill: "gray",
          stroke: "none",
          d: "M1997.2 318L1691.66 615.599H2302.73L1997.2 318Z",
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
          fill: "violet",
          stroke: "none",
          d: "M-5 381L1118 735H-5V381Z",
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
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          fill: "violet",
          stroke: "none",
          d: "M2290 381L1227 735H2290V381Z",
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
          fill: "purple",
          stroke: "none",
          d: "M282.175 445L758.35 799.075H-209L282.175 445Z",
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
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          fill: "purple",
          stroke: "none",
          d: "M2065.18 445L2541.35 799.075H1574L2065.18 445Z",
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
      transition: baseTransition([0, .72, 1]),
    },
  },

  leftGroup: {
    g: {
      paths: [
        {
          fill: "yellow",
          stroke: "none",
          d: "M112.803 601L418.339 898.599H-192.733L112.803 601Z",
        },
        {
          fill: "yellow",
          stroke: "none",
          d: "M614.197 601L919.733 898.599H308.661L614.197 601Z",
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
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          fill: "yellow",
          stroke: "none",
          d: "M1679.8 601L1374.27 898.599H1985.34L1679.8 601Z",
        },
        {
          fill: "yellow",
          stroke: "none",
          d: "M2181.2 601L1875.66 898.599H2486.73L2181.2 601Z",
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
      filter: [ "blur(45px)", "blur(0px)", "blur(3.5px)"],
      y: 0,
      scaleY: 1,
      transition: baseTransition([0, 0.88, 1]),
    },
  },

  leftGroup: {
    g: {
      paths: [
        {
          fill: "orange",
          stroke: "none",
          d: "M255.175 673L731.35 1027.07H-236L255.175 673Z",
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
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          fill: "orange",
          stroke: "none",
          d: "M2054.18 673L2530.35 1027.07H1563L2054.18 673Z",
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
      y:0,
      transition: baseTransition(),
    },
  },

  leftGroup: {
    g: {
      paths: [
        {
          fill: "green",
          stroke: "none",
          d: "M180.958 829L471.04 1126.6H-109.124L180.958 829Z",
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
      },
    },
  },
  rightGroup: {
    g: {
      paths: [
        {
          fill: "green",
          stroke: "none",
          d: "M2137.99 829L1847.91 1126.6H2428.07L2137.99 829Z",
        },
      ],
      variants: {
        init: {
          x: 50,

        },
        final: {
          x: 0,
  
          transition: baseTransition(),
        },
      },
    },
  },
};

const landscapeBG = [
  z5Variant,
  z10Variant,
  z15Variant,
  z20Variant,
  z25Variant,
  z30Variant,
  z35Variant,
  z40Variant,
];

const landscapeBGReversed = [
  z40Variant,
  z35Variant,
  z30Variant,
  z25Variant,
  z20Variant,
  z15Variant,
  z10Variant,
  z5Variant,
];

export default landscapeBGReversed;
