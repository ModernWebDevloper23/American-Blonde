import React from "react";

function AboutSection() {
  return (
    <div
      data-enable-touch-speed
      data-scroll
      data-scroll-speed=".6"
      data-scroll-offset="-300%, 120%"
      class="contactSection w-full z-[100] backdrop-blur-lg h-[90vh] flex-col flex relative xl:items-center xl:flex-row justify-center items-center gap-[30px] xl:gap-[80px] bg-[#010101c8] text-zinc-100"
    >
      <h2 class="xl:w-[27vw] w-[90vw] leading-none text-left xl:h-[32vh] text-3xl xl:text-[55px]">
        BECOME PART
        <span class="text-[15px] text-center overflow-hidden hidden xl:inline-block w-[3vw]">
          BE THE FIRST
        </span>{" "}
        OF OUR HOOD
      </h2>
      <div class="xl:w-[27vw] w-[90vw]  xl:h-[30vh] flex flex-col gap-[20px] xl:gap-[30px]">
        <p class="text-[13px]">
          Only the absolute pioneers who sign up for our newsletter get a front
          row seat, because at BrewDistrict24 we cherish those who embrace this
          adventure with us from the very beginning.
        </p>
        <input
          type="email"
          class="w-full bg-transparent border-b-[1px] text-[12px] xl:leading-[25px]  relative xl:top-[20px] border-b-white"
          placeholder="Your email adress"
        />
        <h6 class="text-[10px] ">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </h6>
      </div>
    </div>
  );
}

export default AboutSection;
