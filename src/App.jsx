import { useState } from 'react'
import Landingpage from './components/Landingpage'
import Nav from './components/common/Nav'
import Products from './components/Products'

function App() {

  return (
    <div >
      <Nav/>
      <Landingpage/>
      <Products/>
    </div>
  )
}

export default App
