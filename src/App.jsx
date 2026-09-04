import { useState, createContext } from 'react';
import Landingpage from './components/Landingpage';
import Nav from './components/common/Nav';
import ProductList from './components/ProductList';
import Administrator from './components/Administrator';
import {Route, Routes} from "react-router";

export const userContext = createContext(null);

function App() {

  return (
    <div >
      <Nav/>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/administrator' element={<Administrator/>}/>
      </Routes>    
    </div>
  )
}

export default App
