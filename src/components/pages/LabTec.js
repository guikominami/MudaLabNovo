import React from "react";

import Carousel from "../structure/Carousel";
import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import BoxLeftComponent from "../elements/BoxLeftComponent";
import BoxRightComponent from "../elements/BoxRightComponent";
import SubtitleComponent from "../elements/SubtitleComponent";
import SubTextComponent from "../elements/SubTextComponent"

import { LABTEC } from "../../assets/data/imagesInfo";

const LabTec = () => {
  return (
    <SectionComponent id="labtec">
      <ContainerComponent>
        <BoxLeftComponent>
          <SubtitleComponent>
            Laboratórios de Tecnologias Cidadãs
          </SubtitleComponent>
          <SubTextComponent>
            São projetos de educação não-formal, com caráter experimental e temporário, que 
            desenvolvem processos colaborativos em comunidades para a construção de soluções 
            ambientais e sociais, a partir do uso de tecnologias abertas e de baixo custo. 
          </SubTextComponent>        
          <SubTextComponent>
            Tem como objetivos experimentar as novas tecnologias e entender como elas podem 
            contribuir para a solução de desafios locais. Já foram criadas soluções para 
            desafios ligados ao uso inteligente da água e das Energias Renováveis.
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

export default LabTec