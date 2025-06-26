import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

const Cyl = () => {
  let tex = useTexture("https://www.shutterstock.com/image-vector/four-hearts-row-interspersed-red-260nw-2253736139.jpg")
  let cyll = useRef(null);
  useFrame((state,delta)=>{
    cyll.current.rotation.y +=delta;
  });
  return (
    <group  rotation={[0,1.4,0.5]}>
        <mesh ref={cyll}>
        <cylinderGeometry args={[1,1,1,60,60,true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
    </group>
  )
}

export default Cyl