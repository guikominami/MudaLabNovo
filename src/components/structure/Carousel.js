import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";

import arrow from "../../assets/icons/arrow.svg";

const Container = styled.div`

  width: 40vw;
  height: 80vh;

  @media (max-width: 48em) {
    height: 45vh;
    width: 80vw;
  }

  .swiper {
    width: 100%;
    height: 100%;

    flex-direction: column;        
  }

  .swiper-slide {
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;

      //tirar a sombra para os tutoriais
      box-shadow: ${props => props.isBigSize ? "0": "0 0.25rem 0.25rem 0 rgb(0 0 0 / 61%)"};
    }  
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.body};
    left: 0;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;
    top: 50%;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
      top: 35%;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.body};
    right: 0;
    width: 4rem;
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;
    top: 50%;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
      top: 35%;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

const TextContainer = styled.div`
  //width: 50vw;
  //height: 15vh;
  font-size: ${(props) => props.theme.fontxl};
  font-style: italic;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontmd};
    margin-bottom: 4rem;
  }  
`;

const Carousel = ({
  imagesCarousel,
  disableAutoplay,
  enableNavigation,
  enablePagination,
  bigSize
}) => {
  return (
    <Container isBigSize={bigSize}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: disableAutoplay,
        }}
        pagination={
        {
          enabled: enablePagination,
          clickable: enablePagination
        }}        
        navigation={enableNavigation}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {imagesCarousel.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <img src={item.image} alt={item.text} />
              <br></br>
              <TextContainer>
                {item.text}
              </TextContainer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
