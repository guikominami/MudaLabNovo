import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Container = styled.div`
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

      box-shadow: 0 0.25rem 0.25rem 0 rgb(0 0 0 / 61%);
    }
  }
`;

const SwiperComponent = ({ Images }) => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SwiperComponent;
