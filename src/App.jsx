import { useState, useEffect, createContext } from 'react';
import Landingpage from './components/Landingpage';
import Nav from './components/common/Nav';
import ProductList from './components/ProductList';
import Administrator from './components/Administrator';
import {Route, Routes} from "react-router";

export const userContext = createContext(null);

function App() {
  const [coffees, getCoffee] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/coffees')
    .then(response => response.json())
    .then(data => getCoffee(data))
  },[])

  return (
    <div >
      <Nav/>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path='/products' element={<ProductList coffees = {coffees}/>}/>
        <Route path='/administrator' element={<Administrator coffees = {coffees}/>}/>
      </Routes>    
    </div>
  )
}

export default App
