import { useState } from 'react'
import Card1 from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let src1 = "https://images.pexels.com/photos/38606077/pexels-photo-38606077.jpeg"
  let myObj = {
    name: "Alvi",
    age: 22
  }

  return (
    <>
      <h1 className='bg-green-400 text-red-400'>Tailwind test</h1>
      <img src={src1} alt="" />
      <Card1 />
      <Card1 username = "Tea and cup" btnText = "mazeed seekhe" />
    </>
  )
}

export default App
