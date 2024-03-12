"use client";
import { usePortfolio } from "@/app/context/contextProvider";
import LongStoryShort from "../../LongStoryShort";
import ShortExperiencePage from "./longStoryShort/Short";
import LongExperiencePage from "./longStoryShort/Long";


const ExperienceSheet = () => {
  const { justTheHighlights } = usePortfolio();


  return (
    <div className="flex flex-col items-center justify-center p-5" >
     
      <LongStoryShort />

      {justTheHighlights ? <ShortExperiencePage /> : <LongExperiencePage />}
    </div>
  );
};

export default ExperienceSheet;
