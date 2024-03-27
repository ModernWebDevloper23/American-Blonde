import React from "react";

function Home({modelDecider}) {
  return (
    <div  className='home overflow-hidden h-screen w-full relative flex  items-center xl:gap-0 gap-[38vh] flex-col  justify-center'>
      {modelDecider ===1? <div className="color1 bg-stone-600 absolute top-0 left-0 w-screen h-screen"></div>: console.log('gltf1') }
      {modelDecider ===2? <div className="color1 bg-red-800 absolute top-0 left-0 w-screen h-screen"></div>: console.log('gltf2') }
      {modelDecider ===3? <div className="color1 bg-teal-800 absolute top-0 left-0 w-screen h-screen"></div>: console.log('gltf3') }
      <div className=" text-center flex flex-col items-center justify-center">
        <h1 className="uppercase xl:text-9xl  text-3xl z-[1] text-center w-[80vw] xl:leading-[110px]">
        classic crafts beers, brewed without
      </h1>
      <h1 className="uppercase text-center xl:text-9xl text-3xl z-[999] w-[70vw] xl:leading-[110px]">
        fuss
      </h1>
      </div>
      <h2 className="uppercase text-center z-[1] text-xl  xl:text-4xl w-[60vw] xl:leading-[110px]">
        pure, honest and damn delicious
      </h2>
    </div>
  );
}

export default Home;
