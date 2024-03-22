import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { BioCardType } from "./bioCardList";

interface BioCardProps {
  context: boolean;
  bioCard: BioCardType;
}

const BioCard: FC<BioCardProps> = ({ context, bioCard }) => {
  const contextVariants = {
    initial: { opacity: 0, scaleY: 0 },
    animate: { opacity: 1, scaleY: 1 },
    exit: { scaleY: 0, scaleX: 2, opacity: 0 },
  };

  return (
    <div>
      <div className="block md:hidden px-1 mb-3 sm:border-none border-x-2 border-dark-accent mx-1 hover:bg-dark-accent hover:text-light-shade">
        {/* Dates */}
        <div className="text-center">
          <div className="w-full opacity-70">
            <div className="flex flex-row justify-center items-end">
              <AnimatePresence>
                {context && (
                  <div className="text">{bioCard.date?.from?.month}</div>
                )}
              </AnimatePresence>

              <div className="text-lg font-semibold">
                {bioCard.date?.from?.year}
              </div>

              {bioCard.date?.from?.year &&
                (bioCard.date?.to?.year || bioCard.date?.onGoing) && (
                  <div className=""> - </div>
                )}

              <div className="flex flex-row items-end">
                <AnimatePresence>
                  {context && (
                    <div className="text">{bioCard.date?.to?.month}</div>
                  )}
                </AnimatePresence>

                <div className="text-lg font-semibold">
                  {bioCard.date?.to?.year}
                </div>
              </div>

              {bioCard.date?.onGoing && (
                <div className="text-lg font-semibold">Present</div>
              )}
            </div>

            <div className="w-full flex flex-row gap-2 items-end justify-center">
              <div className="flex flex-row justify-center items-end">
                <AnimatePresence>
                  {context && <div className="">{bioCard.date?.on?.month}</div>}
                </AnimatePresence>

                <div className="text-lg font-semibold">
                  {bioCard.date?.on?.year}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-center justify-center text-center flex flex-row">
          <div className="max-w-[900px]">
            <h2 className="text-2xl tracking-wide">{bioCard.headline}</h2>
            <h3 className=" font-semibold mb-1 ">
              {bioCard.subheader && `- ${bioCard.subheader} -`}
            </h3>

            <AnimatePresence>
              {context && (
                <motion.p
                  className="text-base py-1 px-2 "
                  variants={contextVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {bioCard.content}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-row w-full justify-between  py-5">
        <div className=" w-[30%] text-right px-2 items-start justify-end flex">
          <div className="flex flex-row gap-2 items-end justify-end">
            <div className="flex flex-col justify-center items-center">
              <div className="text-lg">{bioCard.date?.from?.month}</div>

              <div className="text-4xl">{bioCard.date?.from?.year}</div>
            </div>

            {bioCard.date?.from?.year &&
              (bioCard.date?.to?.year || bioCard.date?.onGoing) && (
                <div className="text-lg"> to </div>
              )}

            <div className="flex flex-col items-center">
              <div className="text-lg">{bioCard.date?.to?.month}</div>

              <div className="text-4xl">{bioCard.date?.to?.year}</div>
            </div>

            {bioCard.date?.onGoing && (
              <div className="text-4xl tracking-tighter"> Present</div>
            )}
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="flex flex-row justify-center items-end">
              <div className="text-lg">{bioCard.date?.on?.month}</div>

              <div className="text-4xl">{bioCard.date?.on?.year}</div>
            </div>
          </div>
        </div>

        <div className="w-[70%] px-2 items-left flex flex-col">
          <div className="max-w-[900px]">
            <h2 className="text-4xl font-bold">{bioCard.headline}</h2>
            <h3 className="text-lg font-bold mb-4">
              {bioCard.subheader && `- ${bioCard.subheader} -`}
            </h3>

            <AnimatePresence>
              {context && (
                <div>
                  <motion.p
                    className="text-base"
                    variants={contextVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {bioCard.content}
                  </motion.p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioCard;
