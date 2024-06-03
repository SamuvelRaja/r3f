import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";
import islandScene from "../assets/3d/scene1.glb";

const Model = ({ position, scale, setPosition }) => {
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  function updatePosition(e) {
    let scroll = e.deltaY;
    setPosition((prevPos) => parseInt(prevPos + scroll));
  }

  function updateTouch(e) {
    console.log(e, "t");
    const clientX = e.touches ? e.touches[0].clientY : e.clientY;
    const delta = (clientX - lastX.current);
    lastX.current = clientX;
    setPosition((prevPos) => parseInt(prevPos + delta));
  }

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("wheel", updatePosition);
    canvas.addEventListener("touchmove", updateTouch);
    console.log("mount");
    return () => {
      canvas.removeEventListener("wheel", updatePosition);
      canvas.removeEventListener("touchmove", updateTouch);
      console.log("unmount");
    };
  }, [updatePosition]);

  console.log(position, "pos");
  const { nodes, materials } = useGLTF(islandScene);

  const newMaterial = new MeshStandardMaterial({
    color: 0x00008b, // Blue color
    wireframe: true, // Enable wireframe mode
  });
  return (
    <group position={[0, -60, position]} scale={scale} dispose={null}>
      <group position={[0, 0, -6000]}>
        <mesh geometry={nodes.Cube008.geometry} material={newMaterial} />
        <mesh geometry={nodes.Cube008_1.geometry} material={newMaterial} />
      </group>
      <group position={[0, 0, -5000]}>
        <mesh geometry={nodes.Cube014.geometry} material={newMaterial} />
        <mesh geometry={nodes.Cube014_1.geometry} material={newMaterial} />
      </group>
      <group position={[0, 0, -4000]}>
        <mesh geometry={nodes.Cube006.geometry} material={newMaterial} />
        <mesh geometry={nodes.Cube006_1.geometry} material={newMaterial} />
      </group>
      <group position={[0, 0, -3000]}>
        <mesh geometry={nodes.Cube009.geometry} material={newMaterial} />
        <mesh geometry={nodes.Cube009_1.geometry} material={newMaterial} />
      </group>
      <group position={[0, 0, -2000]}>
        <mesh geometry={nodes.Cube011.geometry} material={newMaterial} />
        <mesh geometry={nodes.Cube011_1.geometry} material={newMaterial} />
      </group>
      <group position={[0, 0, -1000]}>
        <mesh geometry={nodes.Cube012.geometry} material={newMaterial} />
        <mesh geometry={nodes.Cube012_1.geometry} material={newMaterial} />
      </group>

      <group position={[0, 0, 0]} wireframe="true">
        <mesh geometry={nodes.Cube001.geometry} material={newMaterial} />
        <mesh geometry={nodes.Cube001_1.geometry} material={newMaterial} />
      </group>
    </group>
  );
};

useGLTF.preload("/scene1.gltf");
export default Model;
