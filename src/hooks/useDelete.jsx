import React from 'react'

function useDelete(id) {
    fetch(`http://localhost:3000/coffees/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        getCoffee(prevCoffees =>
          prevCoffees.filter(coffee => coffee.id !== id)
        );
      });
  }
export default useDelete