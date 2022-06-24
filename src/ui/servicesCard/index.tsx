import React from "react";
import {
  CardContainer,
  CardTitle,
  ServiceIcon,
  ServiceIconWrapper,
} from "./cardElements";
import Tilt from "react-parallax-tilt";

//componente que muestra un spinner de carga
function ServicesCard(props) {
  return (
    <Tilt>
      <CardContainer>
        <CardTitle>{props.title}</CardTitle>
        <ServiceIconWrapper>
          <ServiceIcon src={props.img} />
        </ServiceIconWrapper>
      </CardContainer>
    </Tilt>
  );
}

export { ServicesCard };
