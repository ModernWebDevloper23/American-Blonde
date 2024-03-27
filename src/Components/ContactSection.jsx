import React from "react";

function ContactSection() {
  return (
    <div
      data-scroll
      data-scroll-speed=".4"
      data-scroll-offset="-100%, 100%"
      class="aboutSection relative h-screen w-full z-[100]"
    >
      <div class="flex w-full h-full backdrop-blur-lg bg-[#ffffffb1] flex-col  items-center justify-center  gap-[30px] text-center">
        <h1 class="text-md text-zinc-900 xl:mb-2 uppercase">
          About brewdistrict24
        </h1>
        <h2 class="text-[26px] leading-8  xl:text-[55px] xl:leading-[60px] w-[90vw] xl:w-[82vw] text-zinc-900 uppercase">
          WELCOME TO THE NEIGHBORHOOD. THIS{" "}
          <span class="text-[15px] leading-none xl:inline-block hidden w-[15vw]">
            A HAVEN FOR LIKE-HEARTED PEOPLE, WHERE WE DRINK, LAUGH AND HAVE GOOD
            CONVERSATIONS
          </span>{" "}
          IS WHERE WE COME TOGETHER{" "}
          <span class="xl:inline-block hidden text-[15.4px] px-1 leading-none w-[6vw]">
            ENJOY, EVERY GIVEN MOMENT
          </span>{" "}
          AS ONE.
        </h2>
        <div class="flex w-[90vw] xl:w-[66vw] items-start xl:items-center mt-[20px] opacity-[0.9] xl:flex-row flex-col justify-center gap-[30px]">
          <p class="xl:text-sm text-[11px] text-black text-start xl:leading-[25px] ">
            In good company, we immerse ourselves in ‘gezelligheid’. Together we
            laugh, drink beer and open ourselves up to new surprising
            experiences. We give way to all our senses so we can connect to a
            world that is packed with taste.
          </p>
          <p class="xl:text-sm text-[11px] text-start xl:leading-[25px]  text-black">
            In good company, we immerse ourselves in ‘gezelligheid’. Together we
            laugh, drink beer and open ourselves up to new surprising
            experiences. We give way to all our senses so we can connect to a
            world that is packed with taste.
          </p>
        </div>
        <div class="xl:w-[68vw] w-[90vw] flex mt-[30px] flex-col justify-center">
          <div class="w-full mb-[-8px] border-t-[1px] border-t-zinc-900 "></div>
          <div class="w-[90vw] xl:w-[68vw] ">
            <div class="whitespace-nowrap overflow-hidden">
              <div class="lineitem inline-block border-t-[1px] border-dashed border-t-zinc-900 w-[90vw] xl:w-[68vw] h-[1px]"></div>
              <div class="lineitem inline-block border-t-[1px] border-dashed  border-t-zinc-900 w-[90vw] xl:w-[68vw] h-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
