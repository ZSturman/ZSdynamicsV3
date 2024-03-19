import { motion } from "framer-motion";
import socialMediaLinks from "./socialLinks";
import ThemeToggle from "@/app/components/ToggleTheme";

const Header = () => {
  return (
    <div className="flex flex-col relative h-full">
      <div className="w-full flex items-center justify-end relative">
        <div className="absolute top-0 right-0 m-10">
          <div className="text-dark-shade bg-light-shade p-3 rounded-lg ">
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className=" sticky top-0 p-20">
      <motion.div className="w-full flex items-center justify-center font-urbanist-light">
        - Developer -
      </motion.div>

      <motion.div className="w-full flex items-center justify-center text-6xl mb-10">
        Zachary Sturman
      </motion.div>

      <motion.div className="w-full flex flex-row gap-10 items-center justify-center">
        {socialMediaLinks.map((link, index) => {
          return (
            <motion.div
              className="flex items-center justify-center hover:cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 2 } }}
              key={index}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:cursor-pointer"
              >
                <link.icon />
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
    </div>
  );
};

export default Header;
