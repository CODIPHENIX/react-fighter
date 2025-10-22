import { useState } from 'react'
import './App.css'
import Buttonattack from './components/Buttonattack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>player{count}</p>
      <Buttonattack onClick={() => setCount(count % 2 + 1)} buttonText="Attack"/>
    </>
  )
}

export default App
