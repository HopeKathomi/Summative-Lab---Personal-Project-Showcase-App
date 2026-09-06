import {useContext, useState } from 'react'
import { UserContext } from '../../App'

const Add = () => {
    const {handleCreate} = useContext(UserContext);
    const [data, setData] = useState({
        coffee_name:"",
        description:"",
        origin:"",
        price:0
    });

    function handleChange(e){
        e.preventDefault();
        const { name, value } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));

    }
    
     function handleSubmit(e) {
        e.preventDefault();
        handleCreate(data);
    }

  return (
    <div className="fixed inset-0 backdrop-brightness-95 flex items-center justify-center z-50 ">
        <div className='bg-amber-50 border border-slate-200 rounded-3xl'>
            <p className="bg-teal-100 rounded-t-3xl text-black  font-semibold  py-2 mb-2">Add</p>
            <form onSubmit={handleSubmit} className='flex flex-col pb-5 px-4 gap-3'>
                <div className='flex flex-col'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="coffee_name" value={data.coffee_name} onChange={handleChange} className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='description'>Description</label>
                    <input type="text" name="description" value={data.description} onChange={handleChange} className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='origin'>Origin</label>
                    <input type="text" name="origin" value={data.origin} onChange={handleChange} className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='price'>Price</label>
                    <input type="number" name="price" value={data.price} onChange={handleChange} className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <input type="submit" className="bg-red-300 px-4 py-1 rounded-full mt-4"/>
            </form>
        </div>
    </div>
  )
}

export default Add