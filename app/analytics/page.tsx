"use client"
import { useMotionValue, useMotionValueEvent, motion } from 'framer-motion'
import React from 'react'

const Page = () => {
  const x = useMotionValue(0)

  useMotionValueEvent(x, 'change', (latest) => console.log(latest))

  return (
    <>
    <motion.div style={{ x }} drag="x" dragConstraints={{ left: 0, right: 0}} className='w-28 h-28 rounded-md'>

    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* First Path with a simple animation */}
      <motion.path
        fill="none"
        stroke="black"
        strokeWidth="2"
        d="M 20,20 L 180,20"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      {/* Second Path with a different animation */}
      <motion.path
        fill="none"
        stroke="black"
        strokeWidth="2"
        d="M 20,40 L 180,40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
      {/* Add more paths as needed */}
    </svg>
 

    </motion.div>
    </>
  )
}

export default Page