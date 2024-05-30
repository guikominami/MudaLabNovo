import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Pagination, Navigation } from "swiper";

import arrow from "../../assets/icons/arrow.svg";

const Container = styled.div`

  width: 60vw;
  min-height: 70vh;

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

const CarouselTutorial = ({
  imagesCarousel
}) => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={
        {
          enabled: true,
          clickable: true
        }}        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {imagesCarousel.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <img src={item.image} alt={item.text} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CarouselTutorial;
