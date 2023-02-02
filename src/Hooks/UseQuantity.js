import { useState } from "react";

export function UseQuantity(defaultQuantity){
  const [value,setValue]=useState(defaultQuantity || 1);
  // function onChange(e){
  //   console.log('onchange',e.target.value);
  //   if(!(+e.target.value >=1)){
  //     setValue(1);
  //     return;
  //   }
  //   setValue(+e.target.value);
  // }
  return {
    value,
    setValue
  }
}