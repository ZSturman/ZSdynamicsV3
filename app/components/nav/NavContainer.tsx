import NavSvgComponent from "./NavSvgComponent";
import { motion } from "framer-motion";

const NavContainer = () => {
  return (
    <div className="w-screen">
      <div className="fixed bottom-0 mb-10 flex w-full items-center justify-center">

          <NavSvgComponent />
      </div>
    </div>
  );
};

export default NavContainer;
