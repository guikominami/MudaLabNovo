import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import CarouselTutorial from "../structure/CarouselTutorial";
import SectionComponent from "../elements/SectionComponent";

import { TUTORIAL_ENERGIA_SOLAR_DATA } from "../../assets/data/imagesInfo";
import tutorial_lanterna_solar from "../../assets/tutoriais/lanterna_solar/lanterna_solar.jpg";

const EspacoInicial = styled.div`
  min-height: 10vh;

  @media (max-width: 48em) {
    flex-direction: column;
    margin: 5.5rem 0rem 1rem 0rem;
  }
`;

const Container = styled.div`
  width: 70%;
  min-height: 50vh;

  display: flex;
  align-content: center;
  justify-content: center;

  margin: 1rem 0rem 2rem 0rem;

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0.125rem 0.125rem 0.25rem 0.25rem rgb(0 0 0 / 10%);

  @media (max-width: 48em) {
    width: 92%;

    flex-direction: column;
    margin: 5.5rem 0rem 1rem 0rem;
  }
`;

const Box = styled.div`
  width: 80%;

  margin-top: 2rem;
  margin-bottom: 2rem;

  //display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 48em) {
    display: flex;

    margin-bottom: 1rem;
    margin-left: 2rem;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 1000;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  margin: 1rem 0rem 0rem 14rem;

  position: relative;
  color: ${(props) => props.theme.text};

  //horizontal
  align-self: self-start;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 65%;
  font-weight: 400;

  margin-left: 14rem;

  @media (max-width: 64em) {
    width: 100%;
    text-align: left;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 1rem 0 1rem 0;

  img{
    width: 80%;
  }

  @media (max-width: 48em) {
    height: auto;
    margin-bottom: 2rem;
    img{
      width: 100%;
    }
  }
`;

const Tutoriais = () => {
  return (
    <SectionComponent>
      <Outlet />
      <EspacoInicial></EspacoInicial>
      <Title>Tutoriais</Title>
      <SubText>
        Esses tutoriais fazem parte do Projeto Escola em Ligação, financiado
        pela Camara municipal de Lisboa através do Programa BipZip - Bairros e
        Zonas de Intervenção Prioritária.
      </SubText>
      <Title>Energia Solar</Title>
      <SubText>
        Montagem de um sistema solar offgrid.
      </SubText>
      <Container>
        <CarouselTutorial imagesCarousel={TUTORIAL_ENERGIA_SOLAR_DATA} />
      </Container>
      <Title>Lanterna Solar</Title>
      <SubText>
        Montagem de uma lanterna solar.
      </SubText>      
      <Container>
        <ImageContainer>
          <img src={tutorial_lanterna_solar} alt="link" />
        </ImageContainer>
      </Container>      
    </SectionComponent>
  );
};

export default Tutoriais;
