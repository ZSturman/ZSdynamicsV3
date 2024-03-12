import SocialMediaLink from "./SocialMediaLinks";


export type SocialMediaLinkType = {
  title: string;
  href: string;
  icon: any;
  svg: string;
};


interface SocialMediaLinksProps {
  className?: string;
  socialMediaLinks: SocialMediaLinkType[];
}

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ className, socialMediaLinks }) => {


  return (
    <div className="w-full flex flex-row gap-10 justify-center items-center pb-5 pt-10">
      {socialMediaLinks.map((link, index) => {
        return (
          <div key={index}>
            <SocialMediaLink
              Icon={link.icon}
              title={link.title}
              href={link.href}
              className={className}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SocialMediaLinks;
