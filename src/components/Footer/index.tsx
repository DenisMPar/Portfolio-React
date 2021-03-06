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
        <a
          target="_blank"
          href="https://github.com/DenisMPar"
          style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "#fff",
            alignItems: "center",
          }}
        >
          GitHub
          <span style={{ display: "none" }}>Github</span>
          <GithubLogo></GithubLogo>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/denismpar/"
          style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "#fff",
            alignItems: "center",
          }}
        >
          Linkedin
          <LinkedinLogo></LinkedinLogo>
        </a>
        <a
          target="_blank"
          href="mailto:denispar.dev@gmail.com"
          style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "#fff",
            alignItems: "center",
          }}
        >
          Gmail
          <GmailLogo></GmailLogo>
        </a>
        <a
          target="_blank"
          href="https://apx.school/profile/3c628fea-56a7-4752-ae6c-caada303fe28"
          style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "#fff",
            alignItems: "center",
            minHeight: "100%",
            placeSelf: "start",
          }}
        >
          Apx
          <ApxLogo>
            <img
              alt="Logo Apx"
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
