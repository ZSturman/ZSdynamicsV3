import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'


type BioDateType = {
    from?: {
        month?: string,
        year: string,
    },
    to?: {
        month?: string,
        year: string,
    }
    on?: {
        month?: string,
        year: string,
    }
    onGoing?: boolean,

}

type BioCardType = {
    date?: BioDateType,
    headline: string,
    subheader?: string,
    content: string,
}


interface BioCardProps {
    context: boolean,
    bioCard: BioCardType
    }


const BioCard: FC<BioCardProps> = ({context, bioCard}) => {

    const contextVariants = {
        initial: { opacity: 0, scaleY: 0 },
        animate: { opacity: 1, scaleY: 1 },
        exit: { scaleY: 0, scaleX: 2, opacity: 0 },
      };

  return (
    <div className="flex flex-row w-full justify-start ">
    <div className="w-1/3 text-right px-2 text-5xl items-center justify-end flex">
    {bioCard.date?.from?.year}
    {bioCard.date?.from?.month}
    {bioCard.date?.on?.year}
    {bioCard.date?.on?.month}
    {bioCard.date?.to?.year}
    {bioCard.date?.to?.month}
    {bioCard.date?.onGoing && "to Present"}
    </div>

    <div className="w-full px-2 items-left flex flex-col">
      <h2 className="text-2xl font-bold mb-4">
        {bioCard.headline}
      </h2>
      <h3 className="text-lg font-bold mb-4">
        {bioCard.subheader && bioCard.subheader}
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
  )
}

export default BioCard