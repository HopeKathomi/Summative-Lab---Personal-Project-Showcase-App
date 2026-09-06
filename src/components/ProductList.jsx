import Product from './Product';
import Search from './Search';
import { useState, createContext } from 'react';

export const SearchUserContext = createContext();
const ProductList = ({coffees}) => {

  const [searchWord, setSearchWord] = useState("");


  function handleSearch(e){
    e.preventDefault();

  }
  return (
    <div className='bg-amber-100 flex flex-row flex-wrap justify-center items-center gap-7 py-20'>
      <SearchUserContext value={{searchWord, setSearchWord}}>
        <Search/>
        <Product coffees = {coffees}/>
      </SearchUserContext>

      
    </div>
    
  )
}

export default ProductList