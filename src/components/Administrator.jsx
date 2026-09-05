import {useContext, useState } from 'react'
import { UserContext } from '../App'
import {Routes, Route} from "react-router"
import Edit from './pages/Edit'
import Add from './pages/Add'

const Administrator = () => {
  const {coffees, handleDelete} = useContext(UserContext);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  function handleClick(e, id){
    e.preventDefault()
    handleDelete(id)
  }

  return (
    <div className='fixed inset-0 overflow-y-auto flex flex-col gap-5 p-20'>
      {coffees.map(coffee=>(
        <div key={coffee.id} className='shadow-taupe-200 shadow-md flex flex-col p-5 border border-taupe-200 rounded-2xl'>
          <div className='bg-taupe-200 py-3 px-3 rounded-2xl'>
            <div>{coffee.coffee_name}</div>
            <div>{coffee.origin}</div>
          </div>
        
          <div className='flex flex-row items-center gap-10 mt-5'>
            <div className='flex gap-5'>
              <button onClick = {()=>setShowEdit(true)}className='bg-blue-300 px-4 py-1 rounded-full'>Edit
                {showEdit && <Edit/>}
              </button>
              <button onClick = {()=>setShowAdd(true)}className='bg-green-300 px-4 py-1 rounded-full'>Add
                  {showAdd && <Add/>}
              </button>            
            </div>

            <div>
              <button onClick={(e) => handleClick(e,coffee.id)} className='bg-red-400 px-4 py-1 rounded-full'>Delete</button>              
            </div>          
          </div>
        </div>
        
      ))}
      
    </div>
  )
}

export default Administrator