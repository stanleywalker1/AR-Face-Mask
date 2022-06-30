import React, {
 Suspense, useMemo, useRef, useState,
} from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  FaceTracker,
  HeadMaskMesh,
  ZapparCamera,
  ZapparCanvas,
  Loader,
  Pipeline,
  Types,
  FaceLandmark
} from '@zappar/zappar-react-three-fiber';
import { useLoader } from '@react-three/fiber'

//import Scene from './Scene';


import helmetSrc from './assets/updated/maskDebug.glb'
//import helmetSrc from './assets/demoHelmet/z_helmet.glb'

const Model = () => {
  const gltf = useLoader(GLTFLoader, helmetSrc) as any ;
   return <primitive scale={[.1, .1, .1]} position={[0.1, -.1, 0.1]} object={gltf.scene} />;
  // return <primitive position={[0.25, -1.25, 0.1]} object={gltf.scene} />;
  
};

function App() {
  const faceTrackerGroup = useRef<Types.FaceAnchorGroup>();
  const pipeline = new Pipeline();
  return (
    <ZapparCanvas>
      <ZapparCamera pipeline={pipeline} userFacing rearCameraMirrorMode="css" attachArray={undefined} attachObject={undefined} attachFns={undefined} />
      <FaceTracker ref={faceTrackerGroup} pipeline={pipeline} attachArray={undefined} attachObject={undefined} attachFns={undefined}>
      {/* <FaceLandmark
        target="nose-bridge"
      > */}
        <Suspense fallback={null}>
          <Model />  

          {/* <Scene> below is my fix to rendering the model, seems to work the same as <Model> */}
          {/* <Scene/> */}
        </Suspense>
        {/* </FaceLandmark> */}
      </FaceTracker>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2.5, 8, 5]} intensity={4.5} />
      {/* <Loader /> */}
    </ZapparCanvas>
  );
}

export default App;


