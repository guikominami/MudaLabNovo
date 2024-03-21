import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import CarouselTutorial from "../structure/CarouselTutorial";
import SectionComponent from "../elements/SectionComponent";

import { TUTORIAL_ENERGIA_SOLAR_DATA } from "../../assets/data/imagesInfo";
import tutorial_lanterna_solar from "../../assets/tutoriais/lanterna_solar.jpg";
import tutorial_robo from "../../assets/tutoriais/roboDC.jpg";
import tutorial_luminosidade from "../../assets/tutoriais/SensorLuminosidadeRele.jpg";
import tutorial_presenca_luminosidade from "../../assets/tutoriais/SensorPresencaLuminosidadeRele.jpg";
import tutorial_presenca from "../../assets/tutoriais/SensorPresencaRele.jpg";
import tutorial_umidade from "../../assets/tutoriais/SensorUmidadeLed.jpg";

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
      <Title>Roboino</Title>
      <SubText>
        Robô com motores controlado por bluetooth.
      </SubText>      
      <Container>
        <ImageContainer>
          <img src={tutorial_robo} alt="link" />
        </ImageContainer>
      </Container>     
      <Title>Sensor de luminosidade</Title>
      <SubText>
        Sensor de luminosidade.
      </SubText>      
      <Container>
        <ImageContainer>
          <img src={tutorial_luminosidade} alt="link" />
        </ImageContainer>
      </Container>   
      <Title>Sensor de presença e luminosidade</Title>
      <SubText>
        Sensor de presença e luminosidade.
      </SubText>      
      <Container>
        <ImageContainer>
          <img src={tutorial_presenca_luminosidade} alt="link" />
        </ImageContainer>
      </Container>   
      <Title>Sensor de presença</Title>
      <SubText>
        Sensor de presença.
      </SubText>      
      <Container>
        <ImageContainer>
          <img src={tutorial_presenca} alt="link" />
        </ImageContainer>
      </Container>        
      <Title>Sensor de umidade</Title>
      <SubText>
        Sensor de umidade.
      </SubText>      
      <Container>
        <ImageContainer>
          <img src={tutorial_umidade} alt="link" />
        </ImageContainer>
      </Container>    
    </SectionComponent>
  );
};

export default Tutoriais;
