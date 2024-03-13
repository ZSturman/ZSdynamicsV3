import React from "react";
import { IconType } from "react-icons";
import { usePlausible } from "next-plausible";

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
  const plausible = usePlausible();

  const handleClick = (title: string, href: string) => {
    plausible("social-media-link-click", {
      props: {
        title,
        href,
      },
    });
  };




  return (
    <button className={`${className} social-media-link`} onClick={()=>handleClick(title, href)}>
      <a href={`${href}`}>
        <Icon />
      </a>
    </button>
  );
};

export default SocialMediaLink;
