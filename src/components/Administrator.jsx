import {useContext, useState } from 'react'
import { UserContext } from '../App'
import { useNavigate } from "react-router-dom";
import Edit from './pages/Edit'
import Add from './pages/Add'

const Administrator = () => {
  const {coffees, handleDelete} = useContext(UserContext);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  function handleClick(e, id){
    e.preventDefault()
    handleDelete(id)
  }

  return (
    <div className='fixed inset-0 overflow-y-auto flex flex-row justify-center gap-5 p-20'>
      <div className='bg-slate-200 w-40 flex justify-center py-6 h-24 rounded-md'>
        <button onClick = {()=>{setShowAdd(true)}}className='bg-green-300 px-4 py-1 rounded-full h-9'>Add new item
          {showAdd && <Add/>}
        </button>
      </div>
      <div className='flex flex-col w-100 gap-5'>
        {coffees.map(coffee=>(
          <div key={coffee.id} className='shadow-taupe-200 shadow-md flex flex-col p-5 border border-taupe-200 rounded-2xl'>
            <div className='bg-taupe-200 py-3 px-3 rounded-2xl'>
              <div>{coffee.coffee_name}</div>
              <div>{coffee.origin}</div>
            </div>
          
            <div className='flex flex-row items-center gap-10 mt-5'>
              <div className='flex gap-5'>
                <button onClick = {()=>setSelectedCoffee(coffee)}className='bg-blue-300 px-4 py-1 rounded-full'>Edit</button>
                            
              </div>

              <div>
                <button onClick={(e) => handleClick(e,coffee.id)} className='bg-red-400 px-4 py-1 rounded-full'>Delete</button>              
              </div>          
            </div>
          </div>
        ))}
        {selectedCoffee && <Edit setShowEdit={setShowEdit} selectedCoffee={selectedCoffee}/>}
      </div>
      
    </div>
  )
}

export default Administrator