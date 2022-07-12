import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const MyFooter = styled.div`
  color: #fff;
  padding: 48px 24px;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const FooterTitle = styled.h2`
  font-size: 1.5rem;
`;
export const ContainerCopy = styled.div`
  font-size: 0.8rem;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d1d1d1;
`;

export const SocialMediaWrapp = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ApxLogo = styled.div`
  background-color: #ff6136;
  padding: 5px;
  width: 80px;
  height: 100%;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ff7b36;
  }
  @media screen and (max-width: 480px) {
    width: 60px;
  }
`;
export const GithubLogo = styled(BsGithub)`
  color: #ff6136;
  width: 50px;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ff7b36;
  }
  @media screen and (max-width: 480px) {
    width: 30px;
  }
`;
export const LinkedinLogo = styled(BsLinkedin)`
  color: #ff6136;
  width: 50px;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ff7b36;
  }
  @media screen and (max-width: 480px) {
    width: 30px;
  }
`;
export const GmailLogo = styled(SiGmail)`
  color: #ff6136;
  width: 50px;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ff7b36;
  }
  @media screen and (max-width: 480px) {
    width: 30px;
  }
`;
