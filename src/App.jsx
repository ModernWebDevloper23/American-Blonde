import React, { useState } from "react";
import Nav from "./Components/Nav";
import Foreground from "./Components/Foreground";
import CanSwitcher from "./Components/CanSwitcher";
import Background from "./Components/Background";

function App() {
  const [modelDecider, setModelDecider] = useState(1);
  
  const increaseModelDecider = () => setModelDecider(prevDecider => prevDecider + 1);
  const decreaseModelDecider = () => setModelDecider(prevDecider => prevDecider - 1);
  const setModelDeciderToOne = () => setModelDecider(1);

  return (
    <main className="w-full relative overflow-hidden xl:overflow-visible text-zinc-100">
      {modelDecider ===1? <div className="fillerColor1 bg-stone-600 absolute top-0 left-0 w-full h-full"></div>: console.log('gltf1') }
      {modelDecider ===2? <div className="fillerColor1 bg-red-800 absolute top-0 left-0 w-full h-full"></div>: console.log('gltf2') }
      {modelDecider ===3? <div className="fillerColor1 bg-teal-800 absolute top-0 left-0 w-full h-full"></div>: console.log('gltf3') }
      <CanSwitcher
        modelDecider={modelDecider}
        increaseModelDecider={increaseModelDecider}
        decreaseModelDecider={decreaseModelDecider}
        setModelDeciderToOne={setModelDeciderToOne}
  />
      <Nav /> 
      <Background modelDecider={modelDecider}  />
      <Foreground modelDecider={modelDecider} />
    </main>
  );
}

export default App;