import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-[#6B7280] flex flex-col items-center justify-start pt-10 px-4">
      <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">
        Learn about redux toolkit
      </h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App