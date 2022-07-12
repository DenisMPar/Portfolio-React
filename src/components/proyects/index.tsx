import { useRecoilValue } from "recoil";
import { InfoGrid } from "../InfoGrid";
import { useGetProyectsData, useGetWidth } from "../../hooks";
import { ProyectsContainer, ProyectsTitle, ProyectWrapper } from "./elements";
import { useState } from "react";

export function Proyects() {
  const data = useRecoilValue(useGetProyectsData);
  const width = useGetWidth();

  return (
    <ProyectsContainer id="proyects">
      <ProyectsTitle>Proyectos</ProyectsTitle>
      <ProyectWrapper>
        {data.map((item) => {
          return (
            <InfoGrid
              techs={item.techs}
              img={
                width == "large"
                  ? item.imgUrl
                  : width == "medium"
                  ? item.mediumUrl
                  : item.movilUrl
              }
              type="proyect"
              title={item.proyectTitle}
              subtitle={item.proyectDescription}
              webLink={item.webLink}
              gitHubLink={item.gitHubLink}
              key={item.proyectTitle}
            ></InfoGrid>
          );
        })}
      </ProyectWrapper>
    </ProyectsContainer>
  );
}
