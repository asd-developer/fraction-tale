import React from 'react';

import { BrowserRouter as Router,Link} from "react-router-dom";

import { StickyNavbar, PageTitle, Login, Password, LoginBt, FlexStart, FlexEnd, RegisterBt } from './Navbar.elements'


const Navbar = () => {
  return (
    <Router>
      <StickyNavbar>
          <FlexStart>
              <PageTitle href="/">Fraction Tale</PageTitle>
          </FlexStart>
          <FlexEnd>
              <Login type="text" placeholder="Username"/>
              <Password type="password" placeholder="Password"/>
                <a href="/login">
                  <LoginBt>Enter</LoginBt>
                </a>
                <a href="/register">
                  <RegisterBt>Register</RegisterBt> 
                </a>
          </FlexEnd>
      </StickyNavbar>
    </Router>
  );
}

export default Navbar;