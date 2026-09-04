import React from 'react'
import pouringCoffee from '../../public/PouringCoffee.jpg';

const Landingpage = () => {
  return (
    <div className='flex flex-row py-30 px-10 bg-amber-100 items-center justify-center'>
        <div className='flex flex-row justify-center items-center gap-30'>
            <div className='w-100'>
               <p>Coffee R Us</p> 
               <p>The go to store for your coffee needs</p>
               <p className='flex flex-wrap'>From sustaineble micro-lot farms directly into your morning cup. Freshly roasted artisanbeans specialized grinding profile and world-class pour-pver gear curated by master baristas</p>
            </div>
            <div >
                <img src={pouringCoffee} alt="Coffee" className='w-100 border-2 border-amber-200 rounded-3xl'/>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Landingpage