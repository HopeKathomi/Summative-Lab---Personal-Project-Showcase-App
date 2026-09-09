import {useContext} from 'react'
import { UserContext } from '../App'

function useDelete() {
  const {getCoffee} = useContext(UserContext);

  function handleDelete(id){
    fetch(`http://localhost:3000/coffees/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        getCoffee(prevCoffees =>
          prevCoffees.filter(coffee => coffee.id !== id)
        );
      });
  }

  return handleDelete;
  }
export default useDelete