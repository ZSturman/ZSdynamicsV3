import { useMotionValue, useMotionValueEvent, motion } from 'framer-motion'
import React from 'react'

const Page = () => {
  const x = useMotionValue(0)

  useMotionValueEvent(x, 'change', (latest) => console.log(latest))

  return (
    <>
    <motion.div style={{ x }} drag="x" dragConstraints={{ left: 0, right: 0}} className='w-28 h-28 rounded-md'>

    </motion.div>
    </>
  )
}

export default Page