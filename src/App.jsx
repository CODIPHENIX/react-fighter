import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wrapper from './components/layout/wrapper'
import Titre from './components/Titre'
import Turn from './components/Turn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Titre titre='REACT ATTACT'/>
    <Wrapper>
      <Turn turn='put the turns here'/>
    </Wrapper>
    </>
  )
}

export default App
