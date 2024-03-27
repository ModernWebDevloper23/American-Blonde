import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Power4 } from "gsap/all";
import { RefProvider, useRefContext } from "../Context/context.jsx";

function Can1({ modelDecider}) {
  const gltf1 = useLoader(GLTFLoader, "/can1.gltf");
  const gltf2 = useLoader(GLTFLoader, "/scene.gltf");
  const gltf3 = useLoader(GLTFLoader, "/can2.gltf");
  let [isCanInRest, updateIsCanInRest] = useState(true);
  gsap.registerPlugin(ScrollTrigger);
  const canRef = useRef();
  gltf2.materials.None.metalness = 1;
  gltf2.materials.None.roughness = 0.1;
  gltf1.materials.blinn3.metalness = 1.2;
  gltf1.materials.blinn3.roughness = 1;
  gltf3.materials.Material_0.metalness = 2,
  gltf3.materials.Material_1.metalness = 2,
  gltf3.materials.Material_2.metalness = 2,
  gltf3.materials.Material_3.metalness = 2,
  gltf3.materials.Material_4.metalness = 2,
  gltf3.materials.Material_5.metalness = 2,
  gltf3.materials.Material_0.roughness = 0.1,
  gltf3.materials.Material_1.roughness = 0.1,
  gltf3.materials.Material_2.roughness = 0.1,
  gltf3.materials.Material_3.roughness = 0.1,
  gltf3.materials.Material_4.roughness = 0.1,
  gltf3.materials.Material_5.roughness = 0.1,
  useGSAP(() => {
    function restCanAnimation() {
      if (isCanInRest) {
        gsap.set(canRef.current.rotation, { z: -0.1, x: -0.2 });
        gsap.to(canRef.current.rotation, {
          yoyoEase: Power4.easeInOut,
          x: 0.1,
          z: 0.2,
          yoyo: true,
          // ease: Power4.easeOut,
          repeat: -1,
          duration: 8,
        });
        gsap.to(canRef.current.position, {
          y: -0.2,
          yoyoEase: Power4.easeInOut,
          yoyo: true,
          // ease: Power4.easeOut,
          repeat: -1,
          duration: 8,
        });
      }
    }
    restCanAnimation();
    gsap.to(canRef.current.rotation, {
      x: 6.5,
      duration: 2,
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",

        scrub: 0.4,
        onLeave: () => {
          gsap.set(".background", { position: "absolute", top: "100vh" });
          // canDragAnimation();
        },
        onEnterBack: () => {
          gsap.set(".background", { position: "fixed", top: 0 });
        },
        onEnter: () => {
          gsap.set(".background", { position: "fixed", top: 0 });
        },
      },
      onComplete: () => {
        gsap.set(".canContainer", { zIndex: -5 });
      },
    });
    gsap.to(".background", {
      y: "80%",
      scrollTrigger: {
        trigger: ".aboutSection",
        start: "top 30%",
        end: "20%% 30%",
        // markers: true,
        scrub: 2,
        // onLeave: () => {
        //   ".background", { transalteY: "100%" };
        // },
      },
    });
    gsap.to(canRef.current.rotation, {
      z: -0.2,
      y: 6,
      scrollTrigger: {
        trigger: ".aboutSection",
        start: "top 30%",
        end: "20%% 30%",
        markers: true,
        scrub: 2,
      },
    });
    gsap.to(canRef.current.rotation, {
      z: 2,
      x: 1.2,
      y: 6,
      scrollTrigger: {
        trigger: ".contactSection",
        start: "top 30%",
        end: "40% 30%",

        // markers: true,
        scrub: 2,
      },
    });
    gsap.to(".background", {
      y: "140%",
      scrollTrigger: {
        trigger: ".contactSection",
        start: "top 30%",
        end: "40% 30%",

        scrub: 2,
        onLeave: () => {
          updateIsCanInRest(false);
        },

      },
    });
  });

  // const canSwitcherRef = useRefContext();
  // console.log(canSwitcherRef.cureent , 'from can1')
  return (
    <group>
      <mesh ref={canRef}>
        {modelDecider === 1?(window.innerWidth <= 500? <primitive scale={1.3} rotation={[0,1,0]} position={[0, 0.3, 0]} object={gltf1.scene} /> :  <primitive rotation={[0,1,0]} scale={1.7} position={[0, 0.3, 0]} object={gltf1.scene} />): console.log('gltf1 rejected')}
        {modelDecider ===2? (window.innerWidth<=500? <primitive scale={0.8} position={[0, 0.3, 0]} object={gltf2.scene} />:<primitive scale={1}  position={[0, 0.3, 0]}  object={gltf2.scene} />): console.log('gltf2 rejected')}
        {modelDecider===3? (window.innerWidth<=500?<primitive scale={0.02} position={[0, 0.3, 0]} object={gltf3.scene} />:<primitive scale={0.027} position={[0, 0.3, 0]} object={gltf3.scene} />): console.log('gltf3 rejected')}
      </mesh>
    </group>
  );
}


export default Can1;