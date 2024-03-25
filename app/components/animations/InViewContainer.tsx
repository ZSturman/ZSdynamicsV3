import { useInView, motion, useAnimationControls, spring } from "framer-motion";
import { FC, useEffect, useRef } from "react";

interface InViewContainerProps {
  variant?: any;
  fromDirection?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  amount?: number;
}

const InViewContainer: FC<InViewContainerProps> = ({
  children,
  variant,
  fromDirection,
  className,
  duration,
  delay,
  amount,
}) => {
  const ref = useRef(null);
  duration ? duration : 0.5;
  delay ? delay : 0;
  amount ? amount : 1;
  const isInView = useInView(ref, { once: true, amount });

  const controls = useAnimationControls();

  const defaultVariant = {
    hidden: {
      opacity: 0,
      y: fromDirection === "top" ? -100 : fromDirection === "bottom" ? 100 : 0,
      x: fromDirection === "left" ? -100 : fromDirection === "right" ? 100 : 0,
      scaleX: fromDirection === "left" || fromDirection === "right" ? 0 : 1,
      scaleY: fromDirection === "top" || fromDirection === "bottom" ? 0 : 1,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        type: 'spring',
        damping: 15,
        stiffness: 200,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }

    return controls.stop
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variant ? variant : defaultVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default InViewContainer;
