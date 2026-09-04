import React from 'react'

const nav = () => {
  return (
    <div className={'flex flex-row justify-between items-center py-4 px-4 bg-amber-900 text-white'}>
      <div>Coffee R Us</div>
      <div className='flex flex-row gap-10'>
        <p>Home</p>
        <a href="">Shop</a>
      </div>
      <div>
        Admin
      </div>
    </div>
  )
}

export default nav