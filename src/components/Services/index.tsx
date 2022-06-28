import { useEffect } from "react";
import {
  CardsWrapper,
  ServicesContainer,
  ServicesTitle,
} from "./servicesElements";
import { ServicesCard } from "../../ui/servicesCard";
import { useRecoilValue, useRecoilRefresher_UNSTABLE } from "recoil";
import { useGetServicesData } from "../../hooks";

function Services() {
  const services = useRecoilValue(useGetServicesData);
  const refresh = useRecoilRefresher_UNSTABLE(useGetServicesData);

  useEffect(() => {
    refresh();
  }, []);

  return (
    <ServicesContainer id="services">
      <ServicesTitle>Mis servicios</ServicesTitle>
      <CardsWrapper>
        {services.map((service) => (
          <ServicesCard
            key={service.serviceTitle}
            title={service.serviceTitle}
            img={service.imgUrl}
          ></ServicesCard>
        ))}
      </CardsWrapper>
    </ServicesContainer>
  );
}

export { Services };
