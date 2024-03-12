import React from "react";
import { IconType } from "react-icons";

interface SocialMediaLinkProps {
  Icon: IconType;
  href: string;
  title: string;
  svg?: string;
  className?: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  Icon,
  href,
  title,
  className,
}) => {
  return (
    <button className={`${className} social-media-link`}>
      <a href={`${href}`}>
        <Icon />
      </a>
    </button>
  );
};

export default SocialMediaLink;
