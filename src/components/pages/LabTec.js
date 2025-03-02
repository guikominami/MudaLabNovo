import React, { useContext } from "react";

import Carousel from "../structure/Carousel";
import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import BoxLeftComponent from "../elements/BoxLeftComponent";
import BoxRightComponent from "../elements/BoxRightComponent";
import SubtitleComponent from "../elements/SubtitleComponent";
import SubTextComponent from "../elements/SubTextComponent";

import { LABTEC } from "../../assets/data/imagesInfo";
import { laboratoriesText } from "../../assets/data/languageText";
import { LanguageContext } from "../../context/language.context";

const LabTec = () => {
  
  const { language } = useContext(LanguageContext)
  
  return (
    <SectionComponent id="labtec">
      <ContainerComponent>
        <BoxLeftComponent>
          <SubtitleComponent>
            {laboratoriesText[language].title}            
          </SubtitleComponent>
          <SubTextComponent>
            {laboratoriesText[language].body1}
          </SubTextComponent>
          <SubTextComponent>
          {laboratoriesText[language].body2}
          </SubTextComponent>
        </BoxLeftComponent>
        <BoxRightComponent>
          <Carousel
            imagesCarousel={LABTEC}
            disableAutoplay={true}
            enableNavigation={true}
            enablePagination={true}
          />
        </BoxRightComponent>
      </ContainerComponent>
    </SectionComponent>
  );
};

export default LabTec;
