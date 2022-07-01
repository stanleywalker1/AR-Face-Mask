import React, {
 Suspense, useRef,
} from 'react';
import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  FaceTracker,
  ZapparCamera,
  ZapparCanvas,
  Loader,
  Pipeline,
  Types,
} from '@zappar/zappar-react-three-fiber';
import { useLoader } from '@react-three/fiber'

import viniMaskBlack from './assets/viniMaskBlack.glb'
import { showUI } from "@zappar/splash";


const Model = () => {
  const gltf = useLoader(GLTFLoader, viniMaskBlack) as any ;
   return <primitive scale={[.13, .12, .12]} position={[0, 0, 0.5]} object={gltf.scene} />;
};

  // showUI({
  //   // Hide the screen when user taps on the button.
  //   onClick: (e) => {
  //     // Pass 'false' to skip fading out.
  //     e.destroy();
  //   },
  //   title: "My title",
  //   subtitle: "My subtitle",
  //   buttonText: "SUBMIT",
  //   // background: "",
  //   // logo: "",
  // });


function App() {
  const faceTrackerGroup = useRef<Types.FaceAnchorGroup>();
  const pipeline = new Pipeline();
  return (
    <ZapparCanvas>
      <ZapparCamera pipeline={pipeline} userFacing rearCameraMirrorMode="css" attachArray={undefined} attachObject={undefined} attachFns={undefined} />
      <FaceTracker ref={faceTrackerGroup} pipeline={pipeline} attachArray={undefined} attachObject={undefined} attachFns={undefined}>
        <Suspense fallback={null}>
          <Model />  
        </Suspense>
      </FaceTracker>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2.5, 8, 5]} intensity={4.5} />
      <Loader />
    </ZapparCanvas> 
  );
}

export default App;


