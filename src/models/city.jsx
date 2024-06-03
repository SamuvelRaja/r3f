import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/scene1.glb";


const Model=(props)=> {
  const { nodes, materials } = useGLTF(islandScene)
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -1550]}>
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials.hotel_glas}
        />
      </group>
      <group position={[0, 0, -1800]}>
        <mesh
          geometry={nodes.Cube004.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Cube004_1.geometry}
          material={materials.hotel_glas}
        />
      </group>
      <group position={[0, 0, -2050]}>
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Cube005_1.geometry}
          material={materials.hotel_glas}
        />
      </group>
      <group position={[0, 0, 800]}>
        <mesh
          geometry={nodes.Cube006.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials.hotel_glas}
        />
      </group>
      <group position={[0, 0, 1300]}>
        <mesh
          geometry={nodes.Cube008.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={materials.hotel_glas}
        />
      </group>
      <group position={[0, 0, 550]} scale={[1, 1, 1.009]}>
        <mesh
          geometry={nodes.Cube009.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Cube009_1.geometry}
          material={materials.hotel_glas}
        />
      </group>
      <group position={[0, 0, 300]}>
        <mesh
          geometry={nodes.Cube011.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Cube011_1.geometry}
          material={materials.hotel_glas}
        />
      </group>
      <group position={[0, 0, 50]}>
        <mesh
          geometry={nodes.Cube012.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Cube012_1.geometry}
          material={materials.hotel_glas}
        />
      </group>
      <group position={[0, 0, 1050]}>
        <mesh
          geometry={nodes.Cube014.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Cube014_1.geometry}
          material={materials.hotel_glas}
        />
      </group>
      <group position={[0, 0, -200]}>
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.hotel_glas}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene1.gltf')
export default Model