import React from 'react';
import styled from 'styled-components';
import { Food, FoodLabel } from '../Menu/FoodGrid';
import { PizzaRed } from '../Style/color';
import { Title } from '../Style/title';
import { formatPrice } from '../Data/foodData';
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../Hooks/UseQuantity";
import Toppings from "./Toppings";
import { useToppings } from "../Hooks/UseQuantity";
import { useChoice } from "../Hooks/UseChoice";
import { Choices } from "./Choices";

const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
` 
const DialogFoodLabel = styled.div`
    position: absolute;
    padding: 5px 10px 6px 18px;
    font-size: 20px;
    background-color: rgba(255,255,255,0.8);
`

const FoodDialog = ({openFood,setOpenFood}) => {
  return (
    <Dialog >
        <Food key={openFood.price} img={openFood.img}>
            <DialogFoodLabel> 
                <div> {openFood.name} </div>
            </DialogFoodLabel>
        </Food>
        <QuantityInput />
        <Toppings />
    </Dialog>
  )
}

export default FoodDialog;