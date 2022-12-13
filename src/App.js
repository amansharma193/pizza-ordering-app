import React from "react";
import {GlobalStyle}  from "./style/globalStyle";
import {Navbar}  from "./navbar/navbar";
import { Banner } from "./banner/Banner";
import { Menu } from "./Menu/Menu";
import { UseOpenFood } from "./Hooks/UseOpenFood";
import {useOrders} from "./Hooks/UseOrders";
import {UseTitle} from "./Hooks/UseTitle";


const App=()=>{
  const openFood = UseOpenFood();
  const orders = useOrders();
  UseTitle({...openFood , ...orders});
  return (
    <div>
      <GlobalStyle/>
        <Navbar />
        <Banner />
        <Menu  {...openFood}/>
    </div>
  )
}
export default App;