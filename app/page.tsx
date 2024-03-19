"use client";
import NewLayout from "./newLayout/NewLayout";
import ContentSection from "./newLayout/ContentSection";

export default function Home() {
  return (
    <div className="max-w-[1400px] w-screen ">
      <NewLayout />

      <div className="w-full h-1 bg-slate-900"></div>

      <ContentSection />
    </div>
  );
}
