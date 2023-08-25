import React from "react";

import Carousel from "../structure/Carousel";
import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import BoxLeftComponent from "../elements/BoxLeftComponent";
import BoxRightComponent from "../elements/BoxRightComponent";
import SubtitleComponent from "../elements/SubtitleComponent";
import SubTextComponent from "../elements/SubTextComponent"

import { ROBOT_DATA } from "../../assets/data/imagesInfo";

const Robotica = () => {
  return (
    <SectionComponent id="robot">
      <ContainerComponent>
        <BoxLeftComponent>
          <SubtitleComponent>
            Programação e Robótica
          </SubtitleComponent>
          <SubTextComponent>
            Quem disse que aprender robótica e programação é difícil?​
            As oficinas de programação e montagem de robôs utilizam tecnologias e 
            recursos de baixo custo para criar modelos de robôs únicos, criativos e 
            sustentáveis, a partir de material de descarte. 
          </SubTextComponent>
        </BoxLeftComponent>
        <BoxRightComponent>
          <Carousel 
            imagesCarousel={ROBOT_DATA} 
            disableAutoplay={true} 
            enableNavigation={true}
            enablePagination={true}
          />
        </BoxRightComponent>
      </ContainerComponent>
    </SectionComponent>
  );
};

export default Robotica;
