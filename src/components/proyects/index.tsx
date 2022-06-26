import React from "react";
import { useRecoilValue } from "recoil";
import { InfoGrid } from "../InfoGrid";
import { useGetProyectsData } from "../../hooks";
import { ProyectsContainer, ProyectsTitle, ProyectWrapper } from "./elements";
import Slider from "react-slick";

export const Proyects = (props) => {
  const data = useRecoilValue(useGetProyectsData);
  console.log("proyects", data);

  return (
    <ProyectsContainer id="proyects">
      <ProyectsTitle>Proyectos</ProyectsTitle>
      <ProyectWrapper>
        {data.map((item) => {
          return (
            <InfoGrid
              techs={item.techs}
              img={item.imgUrl}
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
};
