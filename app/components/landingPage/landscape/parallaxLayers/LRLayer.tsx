"use client";
import { FC } from "react";

interface LRLayerProps {
  pos: "left" | "right";
  children: React.ReactNode;
}

const LRLayer: FC<LRLayerProps> = ({ pos, children }) => {
  return (
    <div className={`w-full h-full absolute bottom-0 ${pos}-0`}>
      {children}

    </div>
  );
};

export default LRLayer;
