import { useState, useEffect, createContext } from 'react';
import Landingpage from './components/Landingpage';
import Nav from './components/common/Nav';
import ProductList from './components/ProductList';
import Administrator from './components/Administrator';
import {Route, Routes} from "react-router";

export const UserContext = createContext(null);

function App() {
  const [coffees, getCoffee] = useState([]);

  function handleCreate(formData){
    fetch('http://localhost:3000/coffees',{
      method:"POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newCoffee => getCoffee(coffee => [...coffee, newCoffee]))
  }

  function handleUpdate(){
    
  }

  function handleDelete(id){
    fetch(`http://localhost:3000/coffees/${id}`,{
      method:"DELETE"
    })
    .then(results => results.json())
    .then(data =>console.log(data))
  }

  useEffect(()=>{
    fetch('http://localhost:3000/coffees')
    .then(response => response.json())
    .then(data => getCoffee(data))
  },[])

  return (
    <div >
      <Nav/>
       <UserContext value={{coffees, handleDelete}}>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path='/products' element={<ProductList />}/>
          <Route path='/administrator' element={<Administrator/>}/>
        </Routes>    
       </UserContext>
    </div>
  )
}

export default App
