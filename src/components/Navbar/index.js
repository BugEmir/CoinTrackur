import React from 'react';
import HeaderComponent from "../HeaderComponent";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <HeaderComponent />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='#' activeStyle>
            About this
          </NavLink>
          <NavLink to='#' activeStyle>
            What i do
          </NavLink>
          <NavLink to='#' activeStyle>
            My skillset
          </NavLink>
          <NavLink to='#' activeStyle>
            Github
          </NavLink>
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='#'>Buy BTC / XRP / VET</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
