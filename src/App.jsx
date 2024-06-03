import { useState } from 'react'
import { Canvas } from "@react-three/fiber";

import './App.css'
import Model  from './models/city';

function App() {

  const [position, setPosition] = useState(-100);

 

  return (
    <>
      <div>
        <h1 className='absolute'>hello</h1>
        <div className={`w-full h-screen bg-transparent`} style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Canvas camera={{ near: 0.1, far: 1000 }}>
            <directionalLight />
            <ambientLight />
            <pointLight />
            <spotLight />
            <hemisphereLight />
            <Model position={position} scale={[10, 10, 1]} setPosition={setPosition}/>
          </Canvas>
        </div>
      </div>
    </>
  )
}

export default App
  