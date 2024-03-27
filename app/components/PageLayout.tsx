"use client";
import Header from "./landingPage/header/Header";
import Contact from "./sheets/contact/Contact";
import Studio from "./sheets/studio/Studio";
import SkillsAndBio from "./sheets/skillAndBio/SkillsAndBio";
import { useAnimationControls, useInView } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PLayers from "./landingPage/landscape/parallaxLayers/PLayers";
import LoaderOne from "../loaders/svgs";
import { Suspense, useEffect, useRef } from "react";
import FgPersonSvgComponent from "./landingPage/landscape/landingPageSvgs/FgPersonSvgComponent";
import NavLinks from "./navLinks/NavLinks";
import ThemeToggle from "./toggles/ToggleTheme";
import { useRouter } from "next/navigation";
import HomePage from "./sheets/homePage/HomePage";

const PageLayout = () => {
  const controls = useAnimationControls();

  const navH = "96px";

  return (
    <div className="relative w-screen h-screen">
      <div className="-z-10">
        <Parallax pages={2} style={{ width: "100%", height: "100%" }}>
          <ParallaxLayer offset={0} speed={0}>
            

            <PLayers controls={controls} />
            
            <div className="flex flex-col h-[200vh]">
              <div className="overflow-x-scroll snap-x snap-mandatory z-50 min-h-screen">
                <Suspense fallback={<LoaderOne />}>
                  <ContentSheets controls={controls} />
                </Suspense>

                {/* FgPersonSvgComponent and NavLinks */}
                <div className="fixed bottom-0 w-full overflow-hidden">
                  <div className="flex justify-end">
                    <FgPersonSvgComponent controls={controls} />
                  </div>
                  <div
                    className="w-full bg-lightest-shade shadow-2xl"
                    style={{ height: navH }}
                  >
                    <Suspense fallback={<LoaderOne />}>
                      <NavLinks />
                    </Suspense>
                  </div>
                </div>

                {/* Theme Toggle */}
                <div className="absolute" style={{ top: "30px", left: "30px" }}>
                  <ThemeToggle />
                </div>
              </div>
              <div className="w-full h-full bg-light-shade z-40">
                <HomePage />
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default PageLayout;

const ContentSheets = ({ controls }: { controls: any }) => {
  const router = useRouter();

  const homeRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const homeInView = useInView(homeRef, { amount: 0.5 });
  const bioInView = useInView(bioRef, { amount: 0.5 });
  const studioInView = useInView(studioRef, { amount: 0.5 });
  const contactInView = useInView(contactRef, { amount: 0.5 });

  useEffect(() => {
    if (homeInView) {
      router.push(`?${new URLSearchParams({ content: "home" }).toString()}`, {
        scroll: false,
      });
    } else if (bioInView) {
      router.push(`?${new URLSearchParams({ content: "bio" }).toString()}`, {
        scroll: false,
      });
    } else if (studioInView) {
      router.push(`?${new URLSearchParams({ content: "studio" }).toString()}`, {
        scroll: false,
      });
    } else if (contactInView) {
      router.push(
        `?${new URLSearchParams({ content: "contact" }).toString()}`,
        {
          scroll: false,
        }
      );
    }
  }, [homeInView, bioInView, studioInView, contactInView, router]);

  return (
    <div className="flex flex-row items-center justify-start overflow-x-scroll snap-x snap-mandatory gap-96 text-darkest-shade">
      <div id="home" className="snap-start h-screen" ref={homeRef}>
        <div className="w-screen flex items-center justify-center">
          <div className="max-w-[900px]">
            <Header controls={controls} />
          </div>
        </div>
      </div>
      <div id="bio" className="snap-start  h-screen" ref={bioRef}>
        <div className="w-screen flex items-center justify-center">
          <div className="max-w-[900px]">
            <SkillsAndBio />
          </div>
        </div>
      </div>
      <div id="studio" className="snap-start  h-screen" ref={studioRef}>
        <div className="w-screen flex items-center justify-center">
          <div className="max-w-[900px]">
            <Studio />
          </div>
        </div>
      </div>
      <div id="contact" className="snap-start  h-screen" ref={contactRef}>
        <div className="w-screen flex items-center justify-center">
          <div className="max-w-[900px]">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};
