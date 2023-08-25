import React from "react";
import { styled } from "styled-components";
import Section from "../elements/SectionComponent";
import TitleComponent from "../elements/Title";
import img from "../../assets/images/parceiros.jpg"

const Container = styled.div`
  width: 75%;
  height: 75vh;
  
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;

  margin: 5rem 0rem 2rem 0rem;

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0.125rem 0.125rem 0.25rem 0.25rem rgb(0 0 0 / 10%);

  @media (max-width: 48em) {
    width: 93%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;

/*     & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    } */
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  //text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  margin: 1rem 0rem 1rem 6rem;

  //border-bottom: 2px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`; 

const Noticias = () => {
  return (
    <Section>
      <Container>
        <Title>PARCEIROS COM QUEM JÁ TRABALHAMOS</Title>                
        <ImageContainer>
          <img src={img} alt="logo dos parceiros"/>
        </ImageContainer>
      </Container>
    </Section>
  );
};

export default Noticias;
