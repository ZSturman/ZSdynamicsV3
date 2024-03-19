import { AnimatePresence, motion } from "framer-motion";
import Contact from "./sheets/contact/Contact";
import Experience from "./sheets/experience/Experience";
import Studio from "./sheets/studio/Studio";
import SkillsAndBio from "./sheets/skillAndBio/SkillsAndBio";
import { useSearchParams } from "next/navigation";

interface ContentSectionProps {}

const ContentSection: React.FC<ContentSectionProps> = ({}) => {
  const searchParams = useSearchParams();

  const selectedContent = searchParams.get("content");

  const pageRevealVariants = {
    hidden: { x: "100vw" },
    visible: {
      x: 0,
      transition: { duration: 0.25 },
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.25 },
    },
  };

  return (
    <>
      {/* Content */}
      <div className="h-screen bg-light-accent ">
        <AnimatePresence mode="wait">
          {selectedContent === "bio" && (
            /* Bio Page */
            <motion.div
              variants={pageRevealVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-light-accent text-dark-shade w-full flex flex-col justify-start items-center"
              key={"bio"}
            >
              <SkillsAndBio />
            </motion.div>
          )}

          {selectedContent === "studio" && (
            /* Studio Page */
            <motion.div
              variants={pageRevealVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-light-accent text-dark-shade w-full flex flex-col justify-start items-center"
              key={"studio"}
            >
              <Studio />
            </motion.div>
          )}

          {selectedContent === "experience" && (
            /* Experience Page */
            <motion.div
              variants={pageRevealVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-light-accent text-dark-shade w-full flex flex-col justify-start items-center"
              key={"experience"}
            >
              <Experience />
            </motion.div>
          )}

          {selectedContent === "contact" && (
            /* Contact Page */
            <motion.div
              variants={pageRevealVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-light-accent text-dark-shade w-full flex flex-col justify-start items-center"
              key={"contact"}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ContentSection;
