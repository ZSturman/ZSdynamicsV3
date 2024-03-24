// ScrollContext.js
import { createContext, useContext } from 'react';
import { MotionValue } from 'framer-motion';

interface ScrollContextType {
  scrollYProgress: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollYProgress: new MotionValue(),
});

export const useScrollContext = () => useContext(ScrollContext);

export default ScrollContext;

