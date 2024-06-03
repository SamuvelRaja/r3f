import { useState } from 'react'
import { Canvas } from "@react-three/fiber";

import './App.css'
import Model  from './models/city2';

function App() {

  const [position, setPosition] = useState(-700);

 

  return (
    <>
      <div>
        <h1 className='absolute text-center w-full font-extrabold text-[40px]'>Acme Builders</h1>
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
  