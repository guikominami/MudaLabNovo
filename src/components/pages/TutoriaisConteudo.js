import React from "react";
import { styled } from "styled-components";
import CarouselTutorial from "../structure/CarouselTutorial";
import BulletsList from "../elements/BulletsList";

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

  img {
    width: 80%;
  }

  @media (max-width: 48em) {
    height: auto;
    margin-bottom: 2rem;
    img {
      width: 100%;
    }
  }
`;

const TutoriaisConteudo = ({ data }) => {
  return (
    <>
      <Title>{data.name}</Title>
      <SubText>{data.description}</SubText>
      <Container>
        <ImageContainer>
          <img src={data.photo} alt="link" />
        </ImageContainer>
      </Container>  
      <Title>O que vai precisar</Title>
        <BulletsList data={data.needs_list}/>
      <Title>Esquema eletrônico</Title>             
      <Container>
        <CarouselTutorial imagesCarousel={data.steps} />
      </Container>
    </>
  );
};

export default TutoriaisConteudo;
