import React, { useState } from "react";
import {
  InfoGridCont,
  InfoGridRow,
  InfoGridWrapp,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  Subtitle,
  TextWrapp,
  BtnWrap,
} from "./infoGridElements";
import { Button } from "../../ui/button";

type props = {
  type: "info" | "proyect";
  title: string;
  subtitle: string;
  img: any;
  webLink?: string;
  gitHubLink?: string;
};

function InfoGrid(props: props) {
  return (
    <InfoGridCont lightBack={false}>
      <InfoGridWrapp>
        <InfoGridRow>
          <Column1>
            <TextWrapp>
              <Heading ligthText={true}>{props.title}</Heading>
              <Subtitle darkText={false}>{props.subtitle}</Subtitle>
            </TextWrapp>
            {props.type == "proyect" ? (
              <BtnWrap>
                <a
                  href={props.webLink}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Button>Proyecto</Button>
                </a>
                <a
                  href={props.gitHubLink}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Button>Código</Button>
                </a>
              </BtnWrap>
            ) : null}
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={props.img} />
            </ImgWrap>
          </Column2>
        </InfoGridRow>
      </InfoGridWrapp>
    </InfoGridCont>
  );
}

export { InfoGrid };
