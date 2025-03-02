import React, { useContext } from "react";

import Carousel from "../structure/Carousel";
import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import BoxLeftComponent from "../elements/BoxLeftComponent";
import BoxRightComponent from "../elements/BoxRightComponent";
import SubtitleComponent from "../elements/SubtitleComponent";
import SubTextComponent from "../elements/SubTextComponent";

import { educationText } from "../../assets/data/languageText";
import { LanguageContext } from "../../context/language.context";

import { MPA_DATA } from "../../assets/data/imagesInfo";

const Educacao = () => {
  const { language } = useContext(LanguageContext);

  return (
    <SectionComponent id="education">
      <ContainerComponent>
        <BoxLeftComponent>
          <SubtitleComponent>{educationText[language].title}</SubtitleComponent>
          <SubTextComponent>
            {educationText[language].body1}
          </SubTextComponent>
          <SubTextComponent>
            {educationText[language].body2}
          </SubTextComponent>
          <SubTextComponent>
            {educationText[language].body3}
          </SubTextComponent>
        </BoxLeftComponent>
        <BoxRightComponent>
          <Carousel
            imagesCarousel={MPA_DATA}
            disableAutoplay={true}
            enableNavigation={true}
            enablePagination={true}
          />
        </BoxRightComponent>
      </ContainerComponent>
    </SectionComponent>
  );
};

export default Educacao;
