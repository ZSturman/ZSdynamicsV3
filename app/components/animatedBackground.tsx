/* "use client"
import { motion} from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "../context/themeContext";


const AnimatedBackground = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Update motion values based on dark/light mode (add your logic here)
    if (theme==="light") {
      lightShade.set("#212e3f");
      lightAccent.set("#5c7a8d");
      mainBrand.set("#7f97ae"); // Assuming main brand stays the same
    } else {
      // Set to light mode colors
      lightShade.set("#fbfafb"); 
      lightAccent.set("#7f97ae");
      mainBrand.set("#9ba0a9");
    }
  }, []);

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-[-50]"
        initial={{ 
          backgroundImage: `linear-gradient(120deg, ${lightShade.get()} 0%, #000000 100%)`
        }}
        animate={{
          backgroundImage: [
            `linear-gradient(120deg, ${lightShade.get()} 0%, #000000 100%)`,
            `linear-gradient(120deg, ${lightAccent.get()} 0%, #313193 100%)`,
            `linear-gradient(120deg, ${mainBrand.get()} 0%, #1c2c49 100%)`,
            `linear-gradient(120deg, ${lightShade.get()} 0%, #3b1c49 100%)`,
          ],
          transition: {
            repeat: Infinity,
            duration: 30,
            ease: "easeInOut",
            repeatType: "reverse",
          },
        }}
        style={{ 
          backgroundImage: `linear-gradient(120deg, ${lightShade.get()} 0%, #000000 100%)`
        }} // Inline style to ensure the latest calculated values are used
      >
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
 */