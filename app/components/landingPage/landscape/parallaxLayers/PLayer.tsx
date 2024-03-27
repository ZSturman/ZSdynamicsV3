"use client"
import { FC } from "react";
import LRLayer from "./LRLayer";
import { ParallaxLayer } from "@react-spring/parallax";

interface PLayerProps {
  speed: number;
}

const PLayer: FC<PLayerProps> = ({ speed }) => {
  return (
      <ParallaxLayer offset={0} speed={speed}>
          
        <LRLayer pos="left" >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="green" />
      </svg>
        </LRLayer>
        <LRLayer pos="right" >
        <svg
                  width="50%"
                  height="50%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" fill="orange" />
                </svg>
        </LRLayer>
    
      </ParallaxLayer>
  );
};

export default PLayer;
