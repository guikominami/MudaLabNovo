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
  width: 60vw;
  height: 80vh;

  @media (max-width: 48em) {
    width: 80vw;
    height: 70vh;

    margin-bottom: 2rem;
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
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.body};
    left: 0;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;
    top: 40%;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
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
    top: 40%;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 70vh;

  margin-top: 4rem;
  margin-bottom: 4rem;

  display: flex;
  //vertical
  justify-content: center;
  //horizontal
  align-items: center;
  //alinhar uma div em cima da outra
  flex-direction: column;

  @media (max-width: 48em) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }  
`;

const TextContainer = styled.div`
  width: 50vw;
  height: 15vh;

  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    width: 80vw;
  }
`;

const CarouselVideo = ({ videosCarousel }) => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {videosCarousel.map((item) => (
          <SwiperSlide key={item.id}>
            <VideoContainer>
              <iframe
                src={item.video}
                title={item.title}
              />
              <br></br>
              <TextContainer>{item.text}</TextContainer>
            </VideoContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CarouselVideo;
