import { useContext }  from 'react'
import { UserContext } from '../App'
import { SearchUserContext } from '../components/ProductList'

const Product = () => {
  const {coffees} = useContext(UserContext);
  const {searchWord} = useContext(SearchUserContext);
  
  return (
    <div className='bg-amber-100 flex flex-row flex-wrap justify-center items-center gap-7 '>
      {coffees
        .filter(coffee => coffee.coffee_name.toLowerCase().includes(searchWord))
        .map(coffee => (
          <div
            key={coffee.id}
            className='bg-amber-50 flex flex-col gap-2 border-2 rounded-md border-amber-50 py-4 px-3 w-80 h-110'
          >
            <div className='bg-amber-100 flex flex-col justify-center items-center py-5 rounded-2xl'>
              <div className='flex flex-col items-center justify-center shadow-md w-40 h-45 bg-amber-200'>
                <p className='font-semibold'>{coffee.coffee_name}</p>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <div className='font-semibold'>{coffee.coffee_name}</div>
              <div>{coffee.description}</div>
              <div>Origin: {coffee.origin}</div>
              <div className='font-semibold'>Ksh. {coffee.price}</div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Product