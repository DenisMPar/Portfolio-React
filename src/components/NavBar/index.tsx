import { FaBars } from "react-icons/fa";
import { animateScroll } from "react-scroll";
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

export function NavBar(props: props) {
  function scrollTop() {
    animateScroll.scrollToTop();
  }

  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to="hero" onClick={() => scrollTop()}>
          Denis
        </NavLogo>
        <MobileMenuIcon onClick={props.toggle}>
          <FaBars></FaBars>
        </MobileMenuIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about" smooth={true} duration={500} spy={true}>
              Acerca de Mi
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="proyects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass={"active"}
            >
              Proyectos
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services" smooth={true} duration={500} spy={true}>
              Servicios
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact" smooth={true} duration={500} spy={true}>
              Contacto
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
}
