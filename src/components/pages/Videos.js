import React from "react";
import { styled } from "styled-components";

import CarouselVideo from "../structure/CarouselVideo";

import { VIDEOS } from "../../assets/data/imagesInfo";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  //vertical
  justify-content: center;
  //horizontal
  align-items: center;
  flex-direction: column;

  @media (max-width: 48em) {
    min-height: 60vh;
    height: 80vh;
    justify-content: flex-start;
  }
`;

const Container = styled.div`
  //height: 100vh;
  //width: 110vw;

  width: 80%;

  display: flex;
  justify-content: center;

  margin-top: 3rem;

  box-shadow: 0.125rem 0.125rem 0.25rem 0.25rem rgb(0 0 0 / 10%);  

  @media (max-width: 48em) {
    height: 90%;
    width: 92%;
    margin-top: 1rem;
  }

  iframe{
    height: 60vh;    
    width: 50vw;

    box-shadow: 0 0.25rem 0.25rem 0 rgb(0 0 0 / 61%);
    
    @media (max-width: 48em) {
      height: 40vh;    
      width: 80vw;

/*       position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none; */
    }    
  }
`;

const Videos = () => {
  return (
    <Section>
      <Container>
        <CarouselVideo
          videosCarousel={VIDEOS}
        />
      </Container>
    </Section>
  );
};

export default Videos;

/* <SubText>
<ListItem>
  <a
    href="https://www.youtube.com/watch?v=ZZ-sneVvi00"
    target="_blank"
    rel="noreferrer"
  >
    Tutorial de construção de um Material Pedagógico.
    <img src={linkIcon} alt="link" />
  </a>
</ListItem>
</SubText>
<SubText>
<ListItem>
  <a
    href="https://www.youtube.com/watch?v=53eRk54CxO0&feature=youtu.be"
    target="_blank"
    rel="noreferrer"
  >
    Vídeo de utilização do Material Pedagógico sobre alimentação
    saudável.
    <img src={linkIcon} alt="link" />
  </a>
</ListItem>
</SubText> */
