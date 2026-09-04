import React from 'react'

const Administrator = ({coffees}) => {
  return (
    <div className='flex flex-col gap-5 p-20'>
      {coffees.map(coffee=>(
        <div key={coffee.id} className='flex flex-col p-5 border rounded-2xl'>
          <div>
            <div>{coffee.coffee_name}</div>
            <div>{coffee.origin}</div>
          </div>
        
          <div className='flex flex-row gap-10'>
            <div className='flex gap-5'>
              <a href="">Edit</a>
              <a href="">Add</a>
            </div>
            <div>
              <a href="">Delete</a>
            </div>          
          </div>
          
        </div>
      ))}
      
    </div>
  )
}

export default Administrator