import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./index.css";
import { OrbitControls} from '@react-three/drei';
import Cyl from "./cyl.jsx";
import {Bloom, ToneMapping} from "@react-three/postprocessing";
import { EffectComposer } from '@react-three/postprocessing';


const App = () => {
  return (
    <>
      <Canvas flat camera={{fov:35}}>
        <OrbitControls/>
        < ambientLight/>
        < Cyl />
        <EffectComposer>
          <Bloom mipmapBlur intensity={2} luminanceThreshold={0} luminanceSmoothing={0}>
          </Bloom>
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default App