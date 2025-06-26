import React from 'react'
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, ScrollControls} from "@react-three/drei"
import MacContainer from './MacContainer';

const App = () => {
  return (
    <div className='h-screen w-full'>
      <div className="navbar text-white absolute flex gap-10 py-5 left-1/2 -translate-x-1/2 capitalize">
        {["iPad","iPhone","Macbook","ios","services","products","contact","about us"].map(e=>(
          <a href=''>{e}</a>
        ))}
      </div>
      <div className='main absolute text-white top-32 left-1/2 -translate-x-1/2 text-center'>
        <h1 className='text-7xl font-[700] yoo'>Macbook Pro</h1>
        <h5 className='text-2xl mt-3 mb-1 font-semibold'>Oh, so Pro!</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <Canvas camera={{fov:12,position:[0,-10,220]}} >
          <OrbitControls />
          <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/studio_small_09_2k.exr']}/>
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App