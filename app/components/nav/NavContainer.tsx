"use client";
import { useState } from "react";
import NavSlice from "./NavSlice";
import { motion } from "framer-motion";
import { FaHamburger } from "react-icons/fa";

const NavContainer = () => {
  const [navVisible, setNavVisible] = useState(false);

  const handleNavToggle = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="w-screen">
      <div className="fixed bottom-0 flex w-full items-center justify-center pb-10">
        <NavSlice navVisible={navVisible} setNavVisible={setNavVisible} />


        <div className="absolute">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            layout
            className="rouneded-full bg-main-brand p-5 rounded-full text-dark-accent shadow-xl"
            onClick={handleNavToggle}
          >
            <FaHamburger />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NavContainer;
