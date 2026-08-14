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
            textColor='white'
            onClick={() => setColor("red")} 
          />
          <Button 
            colorName="Green" 
            bgColor="green" 
            textColor='white'
            onClick={() => setColor("green")} 
          />
          <Button 
            colorName="Blue" 
            bgColor="blue" 
            textColor='white'
            onClick={() => setColor("blue")} 
          />
          <Button 
            colorName="Olive" 
            bgColor="olive" 
            onClick={() => setColor("olive")} 
          />
          <Button 
            colorName="Gray" 
            bgColor="gray" 
            onClick={() => setColor("gray")} 
          />
          <Button 
            colorName="Yellow" 
            bgColor="yellow" 
            onClick={() => setColor("yellow")} 
          />
          <Button 
            colorName="Pink" 
            bgColor="pink" 
            onClick={() => setColor("pink")} 
          />
          <Button 
            colorName="Purple" 
            bgColor="purple"
            textColor='white' 
            onClick={() => setColor("purple")} 
          />
          <Button 
            colorName="Lavender" 
            bgColor="lavender" 
            onClick={() => setColor("lavender")} 
          />
          <Button 
            colorName="White" 
            bgColor="white" 
            onClick={() => setColor("white")} 
          />
          <Button 
            colorName="Black" 
            bgColor="black" 
            textColor='white'
            onClick={() => setColor("black")} 
          />
        </div>
      </div>
    </>
  ) 
}

export default App