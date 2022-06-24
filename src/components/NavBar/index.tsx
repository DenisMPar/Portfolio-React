import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileMenuIcon,
  Nav,
  NavBarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./navElements";

type props = {
  toggle: () => any;
};

export const NavBar = (props: props) => {
  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to="hero">Denis</NavLogo>
        <MobileMenuIcon onClick={props.toggle}>
          <FaBars></FaBars>
        </MobileMenuIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">Acerca de Mi</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="proyects">Proyectos</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Servicios</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">Contacto</NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};
