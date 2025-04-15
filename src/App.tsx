import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  const handleClick = () => setCount((prev: number) => prev + 1)

  return (
    <>
      <h1>Hello world</h1>
      <h1>Counter value :- {count}</h1>
      <button onClick={handleClick} >+</button>
    </>
  )
}

export default App
