

function App() {
  let counter = 15

  const incCount = ()=>{
    counter = counter + 1
    console.log(counter);
    
  }

  const decCount = ()=>{
    counter = counter - 1
    console.log(counter);
    
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
