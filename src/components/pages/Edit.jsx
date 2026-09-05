import React from 'react'


const Edit = () => {
  return (
    <div  className="fixed inset-0 backdrop-brightness-95 flex items-center justify-center z-50 ">
        <div className='bg-amber-50 border border-slate-200 rounded-3xl'>
            <p className="bg-teal-100 rounded-t-3xl text-black  font-semibold  py-2 mb-2">EDIT</p>
            <form action="" className='flex flex-col pb-5 px-4 gap-3'>
                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text"  className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Description</label>
                    <input type="text" className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Origin</label>
                    <input type="text" className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Price</label>
                    <input type="number" className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <input type="submit" onClick={() => setShowEdit(false)} className="bg-red-300 px-4 py-1 rounded-full mt-4"/>
            </form>
        </div>
        
    </div>
  )
}

export default Edit