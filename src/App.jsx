import { useState, createContext } from 'react'
import Landingpage from './components/Landingpage'
import Nav from './components/common/Nav'
import ProductList from './components/ProductList'
import Administrator from './components/Administrator'

export const userContext = createContext(null);

function App() {

  return (
    <div >
      <Nav/>
      <Landingpage/>
      <ProductList/>
      <Administrator/>
    </div>
  )
}

export default App
