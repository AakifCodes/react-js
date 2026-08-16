import { useState, useCallback } from 'react'
import Button from './components/button'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*()_+{}-=[]`"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center p-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 text-gray-600 bg-amber-50 p-4 m-4'
          placeholder='Password'
          readOnly
          />
          <Button />

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}

            />
            <label>Length : {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            id="numberInput" 
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            
            />
            <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            
            />  
            <label htmlFor="characterInput">Characters</label>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
