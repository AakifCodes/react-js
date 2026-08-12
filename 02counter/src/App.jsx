import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15

  const incCount = ()=>{
    if(counter <= 19){
      counter = counter + 1
      console.log(counter)
      setCounter(counter)
  }
    
  }

  const decCount = ()=>{
    if(counter > 0){
      // counter = counter - 1
      setCounter(counter - 1)
      console.log(counter);
    }
    
  }

  return (
    <>
      <h1>Tea and react</h1>
      <h2>Set Count: {counter}</h2>
      <button
      onClick={incCount}
      >Increase Count</button>
      <button
      onClick={decCount}
      >Decrease Count</button>
    </>
  )
}

export default App
