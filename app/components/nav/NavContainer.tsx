import NavSvgComponent from "./NavSvgComponent";
import { motion } from "framer-motion";

const NavContainer = () => {
  return (
    <div className="w-screen">
      <div className="fixed bottom-0 flex w-full items-center justify-center pb-10">

          <NavSvgComponent />
      </div>
    </div>
  );
};

export default NavContainer;
