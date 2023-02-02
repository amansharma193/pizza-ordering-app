import { useState } from "react";

export function useToppings(defaultTopping){
  const [toppings , setToppings] = useState(
    defaultTopping || getDefaultToppings()
  );
  function checkToppings(index){
    const newToppings= [...toppings];
    newToppings[index].checked = !newToppings[index];
    setToppings(newToppings);
  }
  return{
    toppings,
    checkToppings
  }
}

function getDefaultToppings(){
  return ToppingsList.map(topping=>({
    name: topping,
    checked:false
  }))
}

const ToppingsList = [
  "Extra Cheese",
  "Pepperoni",
  "Sausage",
  "Onions",
  "Peppers",
  "Pineapple",
  "Ham",
  "Spinach",
  "Artichokes",
  "Mushrooms",
  "Anchioves"
]   