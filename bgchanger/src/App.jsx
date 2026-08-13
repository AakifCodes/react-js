import './App.css'
import Button from './components/button'
import {useState} from 'react'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

    </div>
    <div className='fixed flex flec-wrap justify-center botton-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
        <Button colorName = "red" bgColor = "red"/>

      </div>

    </div>
    </>
  )
}

export default App
