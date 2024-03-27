import React from "react";

function CanSection({modelDecider}) {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      class=" canSection bg-stone-600 h-screen  w-full relative "
    >
      {modelDecider ===1? <div className="color1 bg-stone-600 absolute top-0 left-0 w-full h-full"></div>: console.log('gltf1 ka lund lele') }
      {modelDecider ===2? <div className="color1 bg-red-800 absolute top-0 left-0 w-full h-full"></div>: console.log('gltf2 ka lund lele') }
      {modelDecider ===3? <div className="color1 bg-teal-800 absolute top-0 left-0 w-full h-full"></div>: console.log('gltf3 ka lund lele') }
      <div
        class=" h-full w-full relative xl:left-[-30px] xl:top-[-10px] flex xl:flex-row flex-col items-center justify-center
                gap-[10px] xl:gap-[90px]"
                
      >
        <h1 class="xl:text-[50px] xl:hidden text-6xl  text-neutral-800 xl:leading-[50px] uppercase">
              NEIPA
            </h1>
        <div class="w-[30vw] xl:flex flex-col justify-center gap-[150px] hidden items-end  h-[57vh]">
          <div class="relative top-[-20px] w-[15vw] text-right">
            <h2 class="text-[16px] font-thin uppercase leading-[50px]">
              discover our beers
            </h2>
            <h1 class="text-[50px] text-black text-zinc-900 leading-[50px] uppercase">
              NEIPA
            </h1>
            <h3 class="text-xl font-thin uppercase  leading-[50px]">
              alc 6% vol - 330 ml
            </h3>
          </div>
          <div class=" text-right w-[15vw]">
            <h2 class="text-[17px] font-thin leading-[40px]">ingredients</h2>
            <h4 class=" text-right w-[15.59vw] text-zinc-900 uppercase font-thin leading-[25px] text-[19px] ">
              water, malt (pale malt, wheats, oats), hop (sabro, mosaic), yeast,
              alchol 6%
            </h4>
          </div>
        </div>
        <div class="border-[1px] border-white rounded-[50px] w-[60vw] xl:w-[19vw] h-[46vh] xl:h-[58vh]"></div>
        <div class="w-[27vw] h-[57vh]  xl:flex flex-col items-start  hidden justify-center gap-[40px]">
          <div class="flex justify-betwen flex-col h-[45vh] gap-[20px] w-full">
            <h2 class="text-[22px] tracking-tight font-thin w-[30vw]">
              experience the smooth fruit sensation of new england ipa
            </h2>
            <p class="text-zinc-900 text-[14px] leading-[25px]">
              Connect to a World that is packed with taste. from England to
              India, all the way up to american tropics, where its bold flavours
              originate. who needs coco rum when you can grab a beer like this?
            </p>
          </div>
          <div class="h-[55vh]">
            <div class="canDetailDivision h-[20vh] opacity-[0.9] w-[15vw] flex flex-col items-center justify-center">
              <div class="w-full  border-dotted  h-1/2 flex items-center justify-center border-t-[1px] border-t-zinc-100 border-b-[1px] border-b-zinc-100">
                <div class="w-1/2 h-[80%] flex flex-col justify-center items-start  border-dotted  border-r-[1px] border-r-zinc-100">
                  <h3 class="text-zinc-100 leading-none">storage advice</h3>
                  <h4 class="text-zinc-900 leading-none">4℃ - 6℃</h4>
                </div>
                <div class="w-1/2 h-[80%] flex flex-col justify-center items-start pl-6  border-dotted ">
                  <h3 class="text-zinc-100 leading-none opacity-1 ">color</h3>
                  <h4 class="text-zinc-900 leading-none">7 ebc</h4>
                </div>
              </div>
              <div class="w-full h-1/2 flex  border-dotted  border-b-[1px] items-center justify-center border-b-zinc-100">
                <div class="w-1/2 h-[80%] flex flex-col justify-center items-start  border-dotted  border-r-[1px] border-r-zinc-100">
                  <h3 class="text-zinc-100 leading-none">calories</h3>
                  <h4 class="text-zinc-900 leading-none">180</h4>
                </div>
                <div class="w-1/2 h-[80%] flex flex-col justify-center items-start pl-6">
                  <h3 class="text-zinc-100 leading-none">bitterness</h3>
                  <h4 class="text-zinc-900 leading-none">23 ibu</h4>
                </div>
              </div>
            </div>
            <h2 class="font-[100] text-zinc-900 uppercase tracking-tight text-[13px] ">
              contains gluten
            </h2>
            <div class="flex items-center justify-center py-3  rounded-[40px] mt-[18px] hover:bg-zinc-100 cursor-pointer text-[12px] uppercase leading-none bg-[#d397b1] tracking-tight text-zinc-900">
              order now
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 py-4 bg-amber-600 rounded-[30px] xl:hidden">
          <h1 className="uppercase">Order Now</h1>
        </div>
      </div>
    </div>
  );
}

export default CanSection;
