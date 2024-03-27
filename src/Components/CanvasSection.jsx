import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

function CanvasSection() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.6"
      data-scroll-offset="100%, 100%"
      class="canvaSection bg-[#010101eb] overflow-hidden backdrop-blur-lg z-[100] h-screen w-full relative"
    >
      <canvas class="imageSEQ z-[100]" ref={canvasRef}></canvas>
    </div>
  );
}

export default CanvasSection;
