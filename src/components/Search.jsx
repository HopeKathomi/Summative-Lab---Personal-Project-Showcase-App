import { useContext } from 'react'
import { SearchUserContext } from '../components/ProductList'

const Search = () => {
  const {searchWord, setSearchWord} = useContext(SearchUserContext);
  console.log("serch", searchWord);

  function handleChange(e){
    e.preventDefault();
    setSearchWord(e.target.value);
  }
  return (
    <div className='flex flex-row items-center justify-center gap-3 w-250 rounded-2xl bg-amber-200 py-3 px-3'>
      <p>Search</p>
      <input type="search" value={searchWord} onChange={handleChange}className='bg-white border border-slate-200 rounded-xl py-2 px-3' />
    </div>
  )
}

export default Search