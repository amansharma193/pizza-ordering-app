import React from 'react'
import styled from 'styled-components';
import { UseQuantity } from '../Hooks/UseQuantity';
import { PizzaColor } from "../Style/color";

const GlobalStyle = styled.div`
    padding: 10px;
`
const QtyButton = styled.button`
    border: 2px solid ${PizzaColor};
    font-weight: bold;
    cursor: pointer;
`

export const QuantityInput = () => {

    const qty = UseQuantity(1);

    const incNum = () => {
        qty.setValue(qty.value+1);
    }

    const decNum = () => {
        qty.setValue(qty.value-1);
    }


  return (
    <GlobalStyle>
        <span>Quantity: </span>
        <QtyButton onClick={decNum}> - </QtyButton>
        <span>  {qty.value}  </span>
        <QtyButton onClick={incNum}> + </QtyButton>
    </GlobalStyle>
  )
}
