import React, { useEffect } from "react";
import {
  CardsWrapper,
  ServicesContainer,
  ServicesTitle,
} from "./servicesElements";
import { ServicesCard } from "../../ui/servicesCard";
import { useRecoilValue, useRecoilRefresher_UNSTABLE } from "recoil";
import { cmsState, useGetServicesData } from "../../hooks";

function Services() {
  const state = useRecoilValue(cmsState);
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
