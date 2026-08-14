import './App.css'
import Button from './components/button'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div 
        className='w-full h-screen duration-200' 
        style={{ backgroundColor: color }}
      />
      
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <Button 
            colorName="Red" 
            bgColor="red" 
            onClick={() => setColor("red")} 
          />
          <Button 
            colorName="Green" 
            bgColor="green" 
            onClick={() => setColor("green")} 
          />
          <Button 
            colorName="Blue" 
            bgColor="blue" 
            onClick={() => setColor("blue")} 
          />
        </div>
      </div>
    </>
  ) 
}

export default App