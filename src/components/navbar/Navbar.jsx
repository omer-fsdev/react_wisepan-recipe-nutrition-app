import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyle";
import logo from "../../assets/images/wisepan.png";

const Navbar = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <Nav>
      <Logo to="/home" onClick={() => setMenuDisplay(false)}>
        <img src={logo} alt="wise-pan-logo" />
        {/* <i>{"<WisePan/>"}</i> */}
        {/* <span>Recipe&Nutrition</span> */}
      </Logo>
      <Hamburger onClick={() => setMenuDisplay(!menuDisplay)}>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu
        displaying={menuDisplay}
        onClick={() => setMenuDisplay(!menuDisplay)}
      >
        <MenuLink to="/about">About</MenuLink>
        <a
          href="https://en.wikipedia.org/wiki/Category:Nutrition"
          target="_blank"
          rel="noreferrer"
        >
          Articles
        </a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
