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
  Types
} from '@zappar/zappar-react-three-fiber';
import { useLoader } from '@react-three/fiber'
import Scene from './Scene';


// import helmetSrc from './assets/maskLowPoly.glb'

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, helmetSrc) as any ;
//   return <primitive object={gltf.scene} />;
// };

function App() {
  const faceTrackerGroup = useRef<Types.FaceAnchorGroup>();
  const pipeline = new Pipeline();
  return (
    <ZapparCanvas>
      <ZapparCamera pipeline={pipeline} userFacing rearCameraMirrorMode="css" attachArray={undefined} attachObject={undefined} attachFns={undefined} />
      <FaceTracker ref={faceTrackerGroup} pipeline={pipeline} attachArray={undefined} attachObject={undefined} attachFns={undefined}>
        <Suspense fallback={null}>
          {/* <HeadMaskMesh trackerGroup={faceTrackerGroup} /> */}
          {/* <Model />*/}  
          <Scene/>
        </Suspense>
      </FaceTracker>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      <Loader />
    </ZapparCanvas>
  );
}

export default App;


