import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import CarouselTutorial from "../structure/CarouselTutorial";

import { TUTORIAL_ENERGIA_SOLAR_DATA } from "../../assets/data/imagesInfo";

const Section = styled.section`
  width: 100%;
  //position: fixed;

  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 90%;
  margin: 1rem auto;

  display: flex;
  justify-content: center;
  align-content: center;

  box-shadow: 0.125rem 0.125rem 0.25rem 0.25rem rgb(0 0 0 / 10%);  
`;

const Tutoriais = () => {
  return (
    <Section>
      <Outlet />
      <Container>
        <CarouselTutorial
          imagesCarousel={TUTORIAL_ENERGIA_SOLAR_DATA}        
        />
      </Container>
    </Section>
  );
};

export default Tutoriais;
