import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';



  
const Navbar = () => {
  
 
  
    return (
    <>
    <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/artist-application' activeStyle>
            Artist Application
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/market' activeStyle>
            Demo Market
          </NavLink>
        
        </NavMenu>
       
      </Nav>
   
   
    </>
  );
};
  
export default Navbar;