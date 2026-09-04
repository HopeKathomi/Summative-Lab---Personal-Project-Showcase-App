import {useState, useEffect} from 'react'
import Product from './Product';

const ProductList = () => {
  const [coffees, getCoffee] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/coffees')
    .then(response => response.json())
    .then(data => getCoffee(data))
  },[])
  console.log(coffees)
  return (
    <Product coffees = {coffees}/>
  )
}

export default ProductList