import React from 'react';
import { styled } from 'styled-components';

import TypeWriterText from '../TypeWriterText';
import Carousel from '../Carousel';
import SectionComponent from "../elements/SectionComponent";

import { COVER_DATA } from '../../assets/data/imagesInfo';

const Container = styled.div`
  width: 93%;
  min-height: 80vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 2rem;

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  //box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem rgb(1 1 1 / 50%);    
  //box-shadow: 5px 5px 30px 1px darkgrey inset;
  //background-color: "#ffecec";

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 2px;

  @media (max-width: 64em){
    justify-content: center;
    min-height: 70vh;
  }

  @media (max-width: 48em){
    flex-direction: column;
    justify-content: space-around;

    &>*:first-child{
      width: 100%;
      margin-top: 2rem;
    }
  }  
`

const BoxLeft = styled.div`
  width: 50%;
  height: 100%;
  align-self: center;
  margin-left: 6rem;
  margin-right: 6rem;

  @media (max-width: 48em){
    display: flex;
    align-items: center;
    justify-content: center;
  }  
`

const BoxRight = styled.div`
  //Box que tem o container
  width: 50%;
  height: 100%;
  margin-right: 4rem;

  @media (max-width: 48em){
    width: 95%;
    margin-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;    
  }
`

const Cover = () => {

  return (
     <SectionComponent id="cover">
      <Container>
        <BoxLeft>
          <TypeWriterText />
        </BoxLeft>
        <BoxRight>
          <Carousel 
            imagesCarousel={COVER_DATA} 
            disableAutoplay={false} 
            enableNavigation={false}
            enablePagination={false}
          />
        </BoxRight>
      </Container>
    </SectionComponent>
  )
}
  
export default Cover