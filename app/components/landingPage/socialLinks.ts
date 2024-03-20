import { FiLinkedin } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

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
      href: "/ZacharySturman_Resume.pdf",
      icon: FaFileAlt,
      svg: "/social/resume.svg",
    },
  ];

export default socialMediaLinks;