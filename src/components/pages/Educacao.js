import React from "react";

import Carousel from "../structure/Carousel";
import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import BoxLeftComponent from "../elements/BoxLeftComponent";
import BoxRightComponent from "../elements/BoxRightComponent";
import SubtitleComponent from "../elements/SubtitleComponent";
import SubTextComponent from "../elements/SubTextComponent";

import { MPA_DATA } from "../../assets/data/imagesInfo";

const Educacao = () => {
  return (
    <SectionComponent id="education">
      <ContainerComponent>
        <BoxLeftComponent>
          <SubtitleComponent>Materiais Pedagógicos.</SubtitleComponent>
          <SubTextComponent>
            Formação para o desenho e construção coletiva de materiais
            educativos com o uso de novas tecnologias, para auxiliar no processo
            de ensino-aprendizagem de estudantes.
          </SubTextComponent>
          <SubTextComponent>
            Foram realizadas 6 edições pelo Brasil, desde 2018, que apoiaram
            professores de escolas públicas no desenvolvimento de dispositivos
            em diálogo com os programas de educação.
          </SubTextComponent>
          <SubTextComponent>
            Tem como objetivos utilizar a tecnologia open source como
            potencializadora de estratégias educativas e incentivar o trabalho
            colaborativo e o protagonismo da comunidade escolar para a melhoria
            da qualidade da educação nos territórios.
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
