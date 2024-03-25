import { useRouter, useSearchParams } from "next/navigation";
import { FaUserTie } from "react-icons/fa";
import { GiWarpPipe } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { GiEasel } from "react-icons/gi";
import { useScrollContext } from "@/app/context/scrollContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NavLinks = () => {
  const { scrollYProgress } = useScrollContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedContent = searchParams.get("content");

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change',(latestValue) => {
      setOpacity(latestValue > 0.5 ? 1 : 0);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleNavClick = (page: string) => {
    router.push(`?${new URLSearchParams({ content: page }).toString()}`, {
      scroll: false,
    });
    const section = document.querySelector("#contentSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const removeContent = () => {
    router.push(`?${new URLSearchParams({}).toString()}`, {
      scroll: false,
    });
    const section = document.querySelector("#landingPage");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="w-full flex flex-row justify-between items-center px-3 md:px-10 lg:px-20">
      <div>
        <button onClick={removeContent}>
          <motion.div
            className={` w-20 p-3 text-2xl md:text-3xl flex justify-center items-center rounded-lg`}
            style={{ opacity }}
          >
            <div className="font-urbanist-light md:text-nowrap">
              Zachary Sturman
            </div>
          </motion.div>
        </button>
      </div>

      <div className="flex flex-row justify-between items-center gap-0 sm:gap-5 md:gap-10 lg:gap-20 xl:gap-30">
        <button
          onClick={() => handleNavClick("bio")}
          className="flex flex-col items-center justify-center md:py-5"
        >
          <div
            className={` w-20 p-3 text-2xl md:text-3xl flex justify-center items-center rounded-lg ${
              selectedContent === "bio" && "bg-dark-accent"
            } ${selectedContent === "bio" ? "text-light-shade" : ""}`}
          >
            <div className="flex flex-col justify-center items-center">
              <FaUserTie />
              <div className="text-sm landscape:hidden md:landscape:block">
                Bio
              </div>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleNavClick("studio")}
          className="flex flex-col items-center justify-center md:py-5"
        >
          <div
            className={` w-20 p-3 text-2xl md:text-3xl flex justify-center items-center rounded-lg ${
              selectedContent === "studio" && "bg-dark-accent"
            } ${selectedContent === "studio" ? "text-light-shade" : ""}`}
          >
            <div className="flex flex-col justify-center items-center">
              <GiEasel />
              <div className="text-sm landscape:hidden md:landscape:block">
                Studio
              </div>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleNavClick("workflow")}
          className="flex flex-col items-center justify-center md:py-5"
        >
          <div
            className={` w-20 p-3 text-2xl md:text-3xl flex justify-center items-center rounded-lg ${
              selectedContent === "workflow" && "bg-dark-accent"
            } ${selectedContent === "workflow" ? "text-light-shade" : ""}`}
          >
            <div className="flex flex-col justify-center items-center">
              <GiWarpPipe />
              <div className="text-sm landscape:hidden md:landscape:block">
                Workflow
              </div>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleNavClick("contact")}
          className="flex flex-col items-center justify-center md:py-5"
        >
          <div
            className={` w-20 p-3 text-2xl md:text-3xl flex justify-center items-center rounded-lg ${
              selectedContent === "contact" && "bg-dark-accent"
            } ${selectedContent === "contact" ? "text-light-shade" : ""}`}
          >
            <div className="flex flex-col justify-center items-center">
              <HiDotsHorizontal />
              <div className="text-sm landscape:hidden md:landscape:block">
                Contact
              </div>
            </div>
          </div>
        </button>
      </div>
      <div>SoLi</div>
    </div>
  );
};

export default NavLinks;
