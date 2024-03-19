"use client";
import NewLayout from "./newLayout/NewLayout";
import ContentSection from "./newLayout/ContentSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="max-w-[1400px]">
      <div className="flex flex-col justify-center items-center">
      <NewLayout />

      <div className="w-full h-1 bg-slate-900"></div>

      <Suspense fallback={<div>Loading...</div>}>
        <ContentSection />
      </Suspense>
      </div>
      </div>
    
  );
}
