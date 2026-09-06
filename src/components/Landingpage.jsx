import React from 'react'
import pouringCoffee from '../../public/PouringCoffee.jpg';

const Landingpage = () => {
  return (
    <div className='flex flex-row py-30 px-10 bg-amber-100 items-center justify-center'>
        <div className='flex flex-row justify-center items-center gap-30'>
            <div className='w-100'>
               <p className='font-serif text-4xl py-1'>Coffee R Us</p> 
               <p className='text-amber-600 font-serif italic py-1'>The go to store for your coffee needs</p>
               <p className='flex flex-wrap text-taupe-600'>From sustainable farms across the world directly into your morning cup. Freshly roasted artisan beans specialized grinding profile and world-class pour-over gear curated by master baristas</p>
            </div>
            <div >
                <img src={pouringCoffee} alt="Coffee" className='w-70 border-2 border-amber-800 rounded-3xl'/>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Landingpage