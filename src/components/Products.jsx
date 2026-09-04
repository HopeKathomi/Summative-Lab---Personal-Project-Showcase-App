import {useState, useEffect} from 'react'

const Products = () => {
  const [coffees, getCoffee] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/coffees')
    .then(response => response.json())
    .then(data => getCoffee(data))
  },[])
  console.log(coffees)
  return (
    <div className='flex flex-row flex-wrap justify-center items-center gap-6'>
      {coffees.map(coffee => (
        <div key={coffee.id} className='flex flex-col gap-2 border-2 py-4 px-3 w-60'>
          <div className='bg-amber-100 flex flex-col justify-center items-center py-5 rounded-2xl'>
            <div className='flex items-center justify-center shadow-amber-200 w-30 h-40 bg-amber-400'>
              {coffee.coffee_name}
            </div>
          </div>
          <div>
            <div>{coffee.coffee_name}</div>
            <div>{coffee.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products