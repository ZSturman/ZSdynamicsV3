"use client";
import LandingPage from "./components/LandingPage";
import ContentSection from "./components/ContentSection";
import { Suspense } from "react";
import LoaderOne from "./loaders/svgs";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-screen xl:max-w-[2200px] overflow-x-hidden">
        <LandingPage />

        <div className="w-full h-1 bg-slate-900"></div>

        <Suspense fallback={<LoaderOne />}>
          <ContentSection />
        </Suspense>
      </div>
    </div>
  );
}
