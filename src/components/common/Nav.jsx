import React from 'react'
import {Link} from "react-router"

const nav = () => {
  return (
    <div className={'flex flex-row justify-between items-center py-4 px-4 bg-amber-900 text-white'}>
      <div>Coffee R Us</div>
      <div className='flex flex-row gap-10'>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
      </div>
      <div>
        <Link to="/administrator">Admin</Link> 
        
      </div>
    </div>
  )
}

export default nav