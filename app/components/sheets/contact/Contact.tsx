"use client";
import React, { useState } from "react";
import ContactForm from "./contactForm/ContactForm";
import { motion } from "framer-motion";
import socialMediaLinks from "../../landingPage/header/socialLinks";

const ContactSheet = () => {
  const [flashMessage, setFlashMessage] = useState({
    message: "",
    type: "",
    active: false,
  });

  return (
    <div className="flex flex-col w-full justify-center items-center">
      {flashMessage.active && (
        <div
          className={`${
            flashMessage.type === "success" ? "bg-green-400" : "bg-red-400"
          } text-white p-5 text-center`}
        >
          {flashMessage.message}
        </div>
      )}
      <div className="shadow-lg rounded-lg bg-slate-100/20 m-2 sm:m-5 sm:px-5 py-10 sm:w-[500px] md:w-[650px] lg:w-[900px]">
        <ContactForm setFlashMessage={setFlashMessage} />
        <motion.div className="w-full flex flex-row flex-wrap gap-10 items-center justify-center px-10">
          {socialMediaLinks.map((link, index) => {
            return (
              <motion.div
                className="flex items-center justify-center hover:cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, staggerChildren: 0.5 },
                }}
                key={index}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg md:text-2xl hover:cursor-pointer"
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

export default ContactSheet;
