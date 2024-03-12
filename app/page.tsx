"use client";

import Header from "./components/header/Header";
import MainSheet from "./components/sheets/MainSheet";
import NavContainer from "./components/nav/NavContainer";

import { PortfolioProvider } from "./context/contextProvider";
import SocialMediaLinks from "./components/SocialLinks/SocialLinksList";
import { FiLinkedin } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

import BallCanvas from "./components/RotatingCube";
import { useScroll, motion, useAnimate } from "framer-motion";
import { useRef } from "react";
import SocialMediaLink from "./components/SocialLinks/SocialMediaLinks";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const socialMediaLinks = [
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/zacharysturman/",
      icon: FiLinkedin,
      svg: "/social/linkedin.svg",
    },
    {
      title: "twitter",
      href: "https://twitter.com/zachary_sturman",
      icon: FaTwitter,
      svg: "/social/twitter.svg",
    },
    {
      title: "github",
      href: "https://github.com/ZSturman",
      icon: FaGithub,
      svg: "/social/github.svg",
    },
    {
      title: "phone",
      href: "tel:+61426233374",
      icon: FaPhone,
      svg: "/social/phone.svg",
    },
    {
      title: "email",
      href: "mailto:zasturman@gmail.com",
      icon: FaEnvelope,
      svg: "/social/email.svg",
    },
    {
      title: "resume",
      href: "/Zachary_Sturman_Resume.pdf",
      icon: FaFileAlt,
      svg: "/social/resume.svg",
    },
  ];


  return (
    <div
      className="relative w-full  bg-main-brand  text-dark-shade dark:text-light-shade"
      ref={scope}
    >
      <Header />


      <div className=" w-full items-center justify-center flex flex-row gap-10 sticky top-10 z-40">
        {socialMediaLinks.map((link, index) => {
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0, y: 75 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <SocialMediaLink
                href={link.href}
                title={link.title}
                Icon={link.icon}
              />
            </motion.div>
          );
        })}
      </div>

      <PortfolioProvider>
        <MainSheet />

        <NavContainer />
      </PortfolioProvider>
    </div>
  );
}
