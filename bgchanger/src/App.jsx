import './App.css'
import Button from './components/button'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

    </div>
    <div className='fixed flex flec-wrap justify-center botton-12 inset-x-0 px-2'>
      <Button colorName = {color} />

    </div>
    </>
  )
}

export default App
