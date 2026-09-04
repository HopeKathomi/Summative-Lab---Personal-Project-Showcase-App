import { useState } from 'react'
import Landingpage from './components/Landingpage'
import Nav from './components/common/Nav'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-green-300'>
      <Nav/>
      <Landingpage/>
    </div>
  )
}

export default App
