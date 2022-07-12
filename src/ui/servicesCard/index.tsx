import {
  CardContainer,
  CardTitle,
  ServiceIcon,
  ServiceIconWrapper,
} from "./cardElements";

//componente que muestra un spinner de carga
function ServicesCard(props) {
  return (
    <CardContainer>
      <CardTitle>{props.title}</CardTitle>
      <ServiceIconWrapper>
        <ServiceIcon src={props.img} alt={"icon of " + props.title} />
      </ServiceIconWrapper>
    </CardContainer>
  );
}

export { ServicesCard };
