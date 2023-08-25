import React from "react";
import { styled } from "styled-components";

import Section from "../elements/SectionComponent";
import Container from "../elements/ContainerComponent";
import BoxRight from "../elements/BoxRightComponent";
import SubText from "../elements/SubTextComponent";

import imgLara from "../../assets/images/equipe/lara.jpg";
import imgGui from "../../assets/images/equipe/gui.jpg";

const ImageContainer = styled.div`
  width: 100%;
  height: 45vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  img{
    width: 80%;
    box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 31%);
  }
`;

const Equipe = () => {
  return (
    <Section>
      <Container>
        <BoxRight>
          <ImageContainer>
            <img src={imgLara} alt="Imagem da Lara" />
          </ImageContainer>
          <SubText>
            <b>Lara Nacht</b> é socióloga e
            mestranda em Educação e Sociedade no Instituto Universitário de
            Lisboa. Possui mais de 15 anos de experiência em estratégia,
            articulação e engajamento de projetos comunitários e políticas
            públicas. Suas práticas transitam nos campos da educação, direitos
            humanos, territórios e processos participativos.
          </SubText>
        </BoxRight>
        <BoxRight>
          <ImageContainer>
            <img src={imgGui} alt="Imagem do Gui" />
          </ImageContainer>          
          <SubText>
            <b>Guilherme Kominami</b> é
            tecnólogo em processamento de dados e pós-graduado em animação pelo
            SENAC. Tem vasta experiência com programação e desenvolvimento de softwares e
            trabalhou em grandes corporações até 2014, quando migrou para o
            Movimento Maker e se especializou em Novas Tecnologias abertas e de
            baixo custo.
          </SubText>
        </BoxRight>
      </Container>
    </Section>
  );
};

export default Equipe;
