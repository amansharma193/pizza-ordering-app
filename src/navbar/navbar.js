import React from "react";
import styled from "styled-components";
import { PizzaColor } from "../Style/color";
import { Title } from "../Style/title";
const NavbarStyle = styled.div`
  background-color: ${PizzaColor};
  position: fixed;
  width: 100%;
  z-index: 10;
`;
const Logo = styled(Title)`
  color: white;
  font-size: 20px;
  text-shadow: 1px 1px 4px brown;
  margin-left: 10px;
`;

export const Navbar = () => {
  return (
    <NavbarStyle>
      <Logo>Pizza House 🍕</Logo>
    </NavbarStyle>
  );
};
