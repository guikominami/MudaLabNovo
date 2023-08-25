import React from "react";
import styled from "styled-components";

import { COVER_CAROUSEL } from "../../assets/data/imagesInfo";
import { COVER_CAROUSEL_MOBILE } from "../../assets/data/imagesInfo";
import SwiperComponent from "../elements/Swiper";

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
  font-size: ${(props) => props.theme.fontxxxl};
  font-weight: 800;

  text-shadow: 1px 1px black;
  //text-transform: uppercase;  
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
  return (
    <Container>
      <TextContainer>
          Tecnologia e<br></br>
          Educação para<br></br>
          Transformação <br></br>
          Social
      </TextContainer>
      <SwiperContainerDesktop>
        <SwiperComponent Images={COVER_CAROUSEL}/>
      </SwiperContainerDesktop>
      <SwiperContainerMobile>
        <SwiperComponent Images={COVER_CAROUSEL_MOBILE}/>
      </SwiperContainerMobile>      
    </Container>
  );
};

export default CoverCarousel;
