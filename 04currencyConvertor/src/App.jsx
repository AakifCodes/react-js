import { useState } from 'react'
import './App.css'
import { InputBox } from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)

  return (
    <>
      <InputBox />
    </>
  )
}

export default App
