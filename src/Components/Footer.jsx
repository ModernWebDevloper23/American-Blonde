import React from 'react'

function Footer() {
  return (
    <div data-scroll data-scroll-speed="-.6" data-scroll-offset="100%, 100%"
                class="footer w-full h-[80vh] flex items-center justify-center relative xl:gap-[60px] z-[1] xl:flex-row flex-col bg-[#000000ca] ">
                <div class="flex  flex-col xl:flex-row  items-center justify-center gap-[20px] xl:gap-[80px] xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:left-[15vw]">
                    <h2 class="text-3xl xl:text-[55px] w-[90vw] xl:w-[19vw] leading-none">BD24 IN YOUR HOOD?</h2>
                    <div class="flex  flex-col gap-[20px] w-[90vw] xl:w-[25vw] xl:h-[21vh]">
                        <h1 class="xl:text-[16px] text-[14px]" >THE SMELL OF FRESHLY BREWED EXCITEMENT IS IN THE AIR</h1>
                        <p class="xl:text-md text-[12px] w-[90vw] font-sans xl:w-[24.7vw]">Are you interested in selling our classic craft beers at your
                            location?
                            Contact
                            us for more information about our beers,
                            prices and possible collaborations. Together we will let your customers experience what
                            truly
                            ‘enjoying the moment’ is
                            all about.
                        </p>
                    </div>
                </div>
            </div>
  )
}

export default Footer