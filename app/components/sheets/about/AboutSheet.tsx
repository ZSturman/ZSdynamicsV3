"use client";
import { usePortfolio } from "@/app/context/contextProvider";
import LongStoryShort from "../../LongStoryShort";
import ShortAboutPage from "./longStoryShort/Short";
import LongAboutPage from "./longStoryShort/Long";

const AboutSheet = () => {
  const { justTheHighlights } = usePortfolio();

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <LongStoryShort />

      {justTheHighlights ? <ShortAboutPage /> : <LongAboutPage />}
    </div>
  );
};

export default AboutSheet;
