import { useState, useContext } from "react"
import { UserContext } from "../../App";

const Edit = ({selectedCoffee, setShowEdit}) => {

    const [selectedCoffeeData, setSelectedCoffeeData] = useState({
        id: selectedCoffee.id,
        coffee_name:selectedCoffee.coffee_name,
        description: selectedCoffee.description,
        origin: selectedCoffee.origin,
        price: selectedCoffee.price
    }); 

    // const {handleUpdate} = useContext(UserContext);

    // function handleClick(e, id){
    //     e.preventDefault()
    //     handleUpdate(id, selectedCoffeeData)
    // }

    function handleUpdate(e){
         e.preventDefault();
        fetch(`http://localhost:3000/coffees/${selectedCoffeeData.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(selectedCoffeeData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Updated:", data);
            // setShowEdit(false);
        });
      }

  return (
    <div onClick={() => setShowEdit(false)} className="fixed inset-0 backdrop-brightness-95 flex items-center justify-center z-50 ">
        <div className='bg-amber-50 border border-slate-200 rounded-3xl'>
            <p className="bg-teal-100 rounded-t-3xl text-black  font-semibold  py-2 mb-2">EDIT</p>
            <form onSubmit = {handleUpdate} className='flex flex-col pb-5 px-4 gap-3'>
                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={selectedCoffeeData.coffee_name} onChange={(e) =>
                        setSelectedCoffeeData(prev => ({
                            ...prev,
                            coffee_name: e.target.value
                        }))} className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Description</label>
                    <input type="text" value={selectedCoffeeData.description}onChange={(e) =>
                        setSelectedCoffeeData(prev => ({
                            ...prev,
                            description: e.target.value
                        }))} className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Origin</label>
                    <input type="text" value={selectedCoffeeData.origin} onChange={(e) =>
                        setSelectedCoffeeData(prev => ({
                            ...prev,
                            origin: e.target.value
                        }))} className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Price</label>
                    <input type="number" value={selectedCoffeeData.price} onChange={(e) =>
                        setSelectedCoffeeData(prev => ({
                            ...prev,
                            price: e.target.value
                        }))} className='border rounded-2xl border-slate-200 px-3 py-1'/>
                </div>
                <button className="bg-red-300 px-4 py-1 rounded-full mt-4"> Submit </button>
            </form>
        </div>
        
    </div>
  )
}

export default Edit