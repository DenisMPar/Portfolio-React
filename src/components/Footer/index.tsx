import React, { useState } from "react";
import { NavLogo } from "../NavBar/navElements";
import { BiCopyright } from "react-icons/bi";
import {
  GithubLogo,
  MyFooter,
  LinkedinLogo,
  GmailLogo,
  ApxLogo,
  SocialMediaWrapp,
  FooterTitle,
  ContainerCopy,
} from "./footerelements";
export function Footer() {
  return (
    <MyFooter>
      <SocialMediaWrapp>
        <FooterTitle>Mis Redes</FooterTitle>
      </SocialMediaWrapp>
      <SocialMediaWrapp>
        <a href="https://github.com/DenisMPar">
          <GithubLogo></GithubLogo>
        </a>
        <a href="https://www.linkedin.com/in/denismpar/">
          <LinkedinLogo></LinkedinLogo>
        </a>
        <a href="mailto:denispar.dev@gmail.com">
          <GmailLogo></GmailLogo>
        </a>
        <a href="https://apx.school/profile/3c628fea-56a7-4752-ae6c-caada303fe28">
          <ApxLogo>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://res.cloudinary.com/dnamyvmsq/image/upload/apx/branding/apx-logo-over-yellow.png"
            ></img>
          </ApxLogo>
        </a>
      </SocialMediaWrapp>
      <ContainerCopy>
        <BiCopyright />
        2022 Denis
      </ContainerCopy>
    </MyFooter>
  );
}
