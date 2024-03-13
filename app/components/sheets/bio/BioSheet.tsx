"use client";
import { usePortfolio } from "@/app/context/contextProvider";
import LongStoryShort from "../../LongStoryShort";
import ShortBioPage from "./longStoryShort/Short";
import LongBioPage from "./longStoryShort/Long";

const BioSheet = () => {
  const { justTheHighlights } = usePortfolio();

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <LongStoryShort />

      {justTheHighlights ? <ShortBioPage /> : <LongBioPage />}
    </div>
  );
};

export default BioSheet;
