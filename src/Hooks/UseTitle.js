import { useEffect } from "react";
export function UseTitle({openFood,orders}){
  useEffect(()=>{
    if(openFood){
      document.title = openFood.name;
    }else{
      document.title = 
        orders.length === 0
          ? `Whats for dinner?`
            : `[${orders.length}] items in your order.`

    }
  })
}