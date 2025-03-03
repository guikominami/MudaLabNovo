import React, { useContext } from "react";
import styled from "styled-components";

import { COVER_CAROUSEL } from "../../assets/data/imagesInfo";
import { COVER_CAROUSEL_MOBILE } from "../../assets/data/imagesInfo";
import SwiperComponent from "../elements/Swiper";

import { LanguageContext } from "../../context/language.context";

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  @media (max-width: 48em) {
    height: 200%;
  }
`;

const TextContainer = styled.div`
  /*   position: fixed;
  top: 250px;
  left: 30px;
  z-index: 2; */

  z-index: 2;
  margin-top: 12rem;
  margin-left: 2.7rem;
  position: absolute;

  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxxxxl};
  font-weight: 800;

  text-shadow: 1px 1px black;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxxl};

    margin-top: 26rem;
    margin-left: 2rem;

    text-shadow: 2px 2px black;
  }
`;

const SwiperContainerDesktop = styled.div`
  display: contents;
  @media (max-width: 48em) {
    display: none;
  }
`;

const SwiperContainerMobile = styled.div`
  display: none;
  @media (max-width: 48em) {
    display: contents;
  }
`;

const CoverCarousel = () => {
  
  const {language} = useContext(LanguageContext);

  let content = (
    <>
      Tecnologia e<br></br>
      Educação para<br></br>
      Transformação <br></br>
      Social
    </>
  );
  
  if (language === "english"){
    content = (
      <>
        Technology and<br></br>
        Education for<br></br>
        Social <br></br>
        Transformation
      </>
    );
  }

  return (
    <Container>
      <TextContainer>
        {content}
      </TextContainer>
      <SwiperContainerDesktop>
        <SwiperComponent Images={COVER_CAROUSEL} />
      </SwiperContainerDesktop>
      <SwiperContainerMobile>
        <SwiperComponent Images={COVER_CAROUSEL_MOBILE} />
      </SwiperContainerMobile>
    </Container>
  );
};

export default CoverCarousel;
