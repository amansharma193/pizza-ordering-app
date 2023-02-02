import React from 'react'
import { useToppings } from '../Hooks/UseToppings';

const Toppings = () => {
    const toppingsList = useToppings();
  return (
    <div>
        <div>Would you like toppings?</div>
            <>
            {Object.entries(toppingsList).map((topping)=>
                <div>{topping.name}</div>
            )}
            </>
    </div>  
  )
}

export default Toppings