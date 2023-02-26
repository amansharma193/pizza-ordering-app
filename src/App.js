import React from "react";
import { GlobalStyle } from "./Style/globalStyle";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./banner/Banner";
import { Menu } from "./Menu/Menu";
import { UseOpenFood } from "./Hooks/UseOpenFood";
import { useOrders } from "./Hooks/UseOrders";
import { UseTitle } from "./Hooks/UseTitle";
import FoodDialog from "./FoodDialog/FoodDialog";
import Order from "./Order/Order";

const App = () => {
  const orders = useOrders();
  const openFood = UseOpenFood();

  UseTitle({ ...openFood, ...orders });
  return (
    <div>
      <GlobalStyle />
      {openFood.openFood && <FoodDialog {...openFood} {...orders} />}
      <Navbar />
      <Order {...orders} {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </div>
  );
};
export default App;
