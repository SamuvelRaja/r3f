import { useState } from 'react'
import { Canvas } from "@react-three/fiber";

import viteLogo from '/vite.svg'
import './App.css'
import Model  from './models/city';

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
         <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{ near: 0.1, far: 1000 }}
      >
          <directionalLight  />
          <ambientLight  />
          <pointLight />
          <spotLight/>
          <hemisphereLight/>
          <Model/>
        </Canvas>
        </div>
    </>
  )
}

export default App
