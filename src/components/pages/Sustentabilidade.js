import React from "react";

import Carousel from "../structure/Carousel";
import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import BoxLeftComponent from "../elements/BoxLeftComponent";
import BoxRightComponent from "../elements/BoxRightComponent";
import SubtitleComponent from "../elements/SubtitleComponent";
import SubTextComponent from "../elements/SubTextComponent"

import { ECO_DATA } from "../../assets/data/imagesInfo";

const Sustentabilidade = () => {
  return (
    <SectionComponent id="ecolab">                                     
      <ContainerComponent>
        <BoxLeftComponent>
          <SubtitleComponent>
            ECOLAB - Alternativas Inovadoras para a Reutilização do Plástico
          </SubtitleComponent>
          <SubTextComponent>
            Promovemos a educação ambiental por meio da transformação do plástico 
            em novos objetos que tenham significado e utilidade para as comunidades. 
            Coletamos embalagens plásticas descartadas e as transformamos em novos objetos 
            utilizando maquinário aberto e de baixo custo.
          </SubTextComponent>
        </BoxLeftComponent>
        <BoxRightComponent>
          <Carousel 
            imagesCarousel={ECO_DATA} 
            disableAutoplay={true} 
            enableNavigation={true}
            enablePagination={true}
          />
        </BoxRightComponent>
      </ContainerComponent>
    </SectionComponent>
  );
};

export default Sustentabilidade