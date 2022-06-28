import { EmailData } from "@sendgrid/helpers/classes/email-address";
import { useEffect, useState } from "react";
import { atom, selector, useSetRecoilState } from "recoil";

import { getCmsContent } from "../lib/api";

export const cmsState = atom({
  key: "cmsState",
  default: null,
});

//cambia el display del home a block cuando termina de cargar el video
export const useShowPage = () => {
  const [flag, setFlag] = useState(false);
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    flag ? setDisplay("block") : setDisplay("none");
  }, [flag]);
  function toggle() {
    setFlag(!flag);
  }
  return { toggle, display };
};
//trae toda la data desde contenful
export const useGetPageData = () => {
  const setState = useSetRecoilState(cmsState);
  useEffect(() => {
    const getData = async () => {
      const data = await getCmsContent();
      setState(data);
    };
    getData();
  }, []);
};

function getCmsImgUrl(object) {
  return object.fields.file.url;
}
function getCmsDescription(object) {
  return object.content[0].content[0].value;
}

//devuelve los datos de servicios del state
export const useGetServicesData = selector({
  key: "useGetServicesData",
  get: ({ get }) => {
    const state = get(cmsState);
    const services = state.filter((item) => item.serviceTitle);
    const formatedServices = services.map((service) => {
      return {
        serviceTitle: service.serviceTitle,
        imgUrl: getCmsImgUrl(service.serviceImg),
      };
    });
    return formatedServices;
  },
});

export const useGetProyectsData = selector({
  key: "useGetProyectsData",
  get: ({ get }) => {
    const state = get(cmsState);
    const proyects = state.filter((item) => item.proyectTitle);

    const formatedProyects = proyects.map((proyect) => {
      return {
        techs: proyect.techs,
        proyectTitle: proyect.proyectTitle,
        imgUrl: getCmsImgUrl(proyect.proyectPreviewImg),
        gitHubLink: proyect.gitHubLink,
        webLink: proyect.webLink,
        proyectDescription: getCmsDescription(proyect.proyectDescription),
      };
    });
    return formatedProyects;
  },
});

export const useGetAboutMeData = selector({
  key: "useGetAboutMeData",
  get: ({ get }) => {
    const state = get(cmsState);
    const aboutMe = state.filter((item) => item.aboutMeTitle);
    if (aboutMe.length > 0) {
      const formattedAboutMe = {
        aboutMeTitle: aboutMe[0]?.aboutMeTitle,
        imgUrl: getCmsImgUrl(aboutMe[0]?.aboutMeImg),
        aboutMeDescription: getCmsDescription(aboutMe[0]?.aboutMeDescription),
      };
      return formattedAboutMe;
    }
  },
});
