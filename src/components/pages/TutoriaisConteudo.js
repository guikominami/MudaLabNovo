import React from "react";
import { styled } from "styled-components";

import CarouselTutorial from "../structure/CarouselTutorial";
import BulletsList from "../elements/BulletsList";

import SubTextTutorialsComponent from "../elements/SubTextTutorialsComponent";

const Container = styled.div`
  width: 70%;
  min-height: 50vh;

  display: flex;
  align-content: center;
  justify-content: center;

  margin: 1rem 0rem 2rem 14rem;

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0.125rem 0.125rem 0.25rem 0.25rem rgb(0 0 0 / 10%);

  @media (max-width: 64em) {
    width: 90%;

    flex-direction: column;
    margin: 1.5rem 0rem 1rem 4rem;
  }  

  @media (max-width: 48em) {
    width: 84%;
    min-height: 20vh;

    flex-direction: column;
    margin: 0.5rem 0rem 1rem 0rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 1rem;

  img {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0rem 1rem 0rem;
    img {
      width: 95%;
    }
  }  

  @media (max-width: 48em) {
    height: auto;
    margin: 0rem;
    img {
      width: 100%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 1000;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  margin: 1.5rem 0rem 0rem 14rem;

  position: relative;
  color: ${(props) => props.theme.text};

  //horizontal
  align-self: self-start;

  @media (max-width: 64em) {
    margin: 2rem 0rem 2rem 4rem;

    font-size: ${(props) => props.theme.fontxl};
  }  

  @media (max-width: 48em) {
    margin: 1rem 0rem 1rem 2rem;

    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Link = styled.a`
  color: blue;
  text-decoration: none;
  /* Changing the color */
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const TutoriaisConteudo = ({ data }) => {
  return (
    <>
      <Title>{data.name}</Title>
      <SubTextTutorialsComponent>{data.description}</SubTextTutorialsComponent>
      <Container>
        <ImageContainer>
          <img src={data.photo} alt="link" />
        </ImageContainer>
      </Container>
      <Title>O que você vai precisar</Title>
      <SubTextTutorialsComponent>
        <BulletsList data={data.needs_list} />
      </SubTextTutorialsComponent>
      {data.code_link && (
        <>
          <Title>CÓDIGO PARA PROGRAMAR O ARDUINO</Title>
          <SubTextTutorialsComponent>
            Clique no {" "} 
            <Link href={data.code_link} target="_blank">
              link
            </Link>{" "}   
            para acessar o código.
          </SubTextTutorialsComponent>
        </>
      )}
      <Title>Esquema eletrônico</Title>
      <Container>
        <CarouselTutorial imagesCarousel={data.steps} />
      </Container>
    </>
  );
};

export default TutoriaisConteudo;
