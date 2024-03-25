import React from "react";
import UnderConstruction from "../UnderConstruction";

const HomePage = () => {
  const publish = true

  if (!publish) {
    return (
      <UnderConstruction />
    )
  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-light-accent">
      <div className="text-dark-shade text-center text-2xl hover:text-3xl cursor-pointer">
        Hello.
      </div>
      <div className="text-dark-shade text-center  cursor-pointer">
        More is coming here later. Come back later to see it in action
      </div>
    </div>
  );
};

export default HomePage;

/* 


for clouds and water
https://codepen.io/wakana-k/pen/jORywbO 

*/


/* 

For Header
https://ui.aceternity.com/components/text-generate-effect
https://ui.aceternity.com/components/text-reveal-card
https://ui.aceternity.com/components/typewriter-effect


*/
/* 
https://ui.aceternity.com/components/aurora-background

https://ui.aceternity.com/components/tracing-beam


FOR NavLinks
https://ui.aceternity.com/components/card-hover-effect
https://ui.aceternity.com/components/floating-navbar 

*/

/* 

https://ui.aceternity.com/components/svg-mask-effect

*/


/* 

https://ui.aceternity.com/components/github-globe

*/

/* Cool animation : use for something */
/* 

        <div
          style={{
            perspective: "2000px",
            transform: "rotateX(10deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>



*/


/*  */