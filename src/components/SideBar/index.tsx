import React from "react";
import { useTransition } from "react-spring";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SidebarLink,
  SideBarMenuWrap,
} from "./sideBarElements";

type props = {
  show: boolean;
  toggle: () => any;
};

export const SideBar = (props: props) => {
  const transtition = useTransition(props.show, {
    from: { opacity: 0, top: `-100%` },
    enter: { opacity: 1, top: `0` },
    leave: { opacity: 0, top: `-100%` },
  });

  return (
    <>
      {transtition((style, item) =>
        item ? (
          <SideBarContainer style={style} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
              <CloseIcon />
            </Icon>
            <SideBarMenuWrap>
              <SideBarMenu>
                <SidebarLink to="about" onClick={props.toggle}>
                  Acerca de mi
                </SidebarLink>
                <SidebarLink to="proyects" onClick={props.toggle}>
                  Proyectos
                </SidebarLink>
                <SidebarLink to="services" onClick={props.toggle}>
                  Servicios
                </SidebarLink>
                <SidebarLink to="contact" onClick={props.toggle}>
                  Contacto
                </SidebarLink>
              </SideBarMenu>
            </SideBarMenuWrap>
          </SideBarContainer>
        ) : null
      )}
    </>
  );
};
