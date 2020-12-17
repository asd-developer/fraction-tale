import React from 'react';
import { StickyNavbar, PageTitle, Login, Password, LoginBt, FlexStart, FlexEnd } from './Navbar.elements'

const Navbar = () => {
  return (
    <StickyNavbar>
        <FlexStart>
            <PageTitle>Fraction Tale</PageTitle>
        </FlexStart>
        <FlexEnd>
            <Login type="text" placeholder="Login"/>
            <Password type="password" placeholder="Password"/>
            <LoginBt>Enter</LoginBt>
        </FlexEnd>
    </StickyNavbar>
  );
}

export default Navbar;