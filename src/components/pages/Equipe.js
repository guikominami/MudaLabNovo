import React from "react";
import { styled } from "styled-components";

import SubText from "../elements/SubTextComponent";

import imgLara from "../../assets/images/equipe/lara.jpg";
import imgGui from "../../assets/images/equipe/gui.jpg";

const Section = styled.section`
  min-height: 87vh;
  //height: auto;
  width: 98vw;
  background-color: ${(props) => props.theme.body};

  //background-color: yellow;

  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  //vertical
  justify-content: start;
  //horizontal
  align-items: center;
  flex-direction: column;

  @media (max-width: 48em) {
    width: 100vw;
    min-height: auto;  
  }
`;

const Container = styled.div`
  width: 80%;
  min-height: 50vh;
  
  display: flex;
  align-content: center;
  justify-content: center;

  margin-top: 1.5rem;

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0.125rem 0.125rem 0.25rem 0.25rem rgb(0 0 0 / 10%);

  @media (max-width: 48em) {
    width: 92%;

    flex-direction: column;
    justify-content: start;
    margin: 1rem 0rem 1rem 0rem;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  margin-top: 4.5rem;

  background-color: white;

  border-bottom: 2px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    margin-top: 6rem;
    margin-bottom: 0.5rem;    
  }
`;

const Box = styled.div`
  width: 50%;
  height: auto;
  margin-bottom: 1rem;

  @media (max-width: 48em) {
    flex-direction: column;
    
    margin-top: 1rem;

    width: 90%;    
    //vertical  
    justify-content: center;
    //horizontal  
    align-items: center;
    //vertical  
    align-self: center;  
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 38vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-top: 1rem;

  img{
    width: 80%;
    box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 31%);
  }

  @media (max-width: 48em) {
    height: auto;
    margin-bottom: 2rem;
    img{
      width: 100%;
    }
  }
`;

const Equipe = () => {
  return (
    <Section>
      <Title>EQUIPE</Title>
      <Container>
        <Box>
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
        </Box>
        <Box>
          <ImageContainer>
            <img src={imgGui} alt="Imagem do Gui" />
          </ImageContainer>          
          <SubText>
            <b>Guilherme Kominami</b> é
            graduado em processamento de dados e pós-graduado em animação. 
            Tem vasta experiência com programação e desenvolvimento de softwares e
            trabalhou em grandes corporações até 2014, quando migrou para o
            Movimento Maker e se especializou em Novas Tecnologias abertas e de
            baixo custo.
          </SubText>
        </Box>
      </Container>
    </Section>
  );
};

export default Equipe;
