import React from "react";
import { styled } from "styled-components";

import imgDesktop from "../../assets/images/parceiros/parceirosDesktop.jpg"
import imgMobile from "../../assets/images/parceiros/parceirosMobile.jpg"

const Section = styled.section`
  min-height: 87vh;
  //height: auto;
  width: 98vw;
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
    width: 89vw;
    min-height: auto;  
  }
`;

const Container = styled.div`
  width: 75%;
  height: 75vh;
  
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;

  margin: 3.5rem 0rem 0rem 0rem;

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0.125rem 0.125rem 0.25rem 0.25rem rgb(0 0 0 / 10%);

  @media (max-width: 48em) {
    margin: 5.5rem 0rem 1rem 1.5rem;
    width: 99%;
    height: auto;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  margin: 1rem 0rem 1rem 7rem;

  //border-bottom: 2px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    margin: 1rem 0rem 1rem 2rem;    
  }
`; 

const ImageContainer = styled.div`
  width: 100%;
  //text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 82%;
  }

  @media (max-width: 48em) {
    display: none;    
  }  
`;

const ImageContainerMobile = styled.div`
  display: none;

  @media (max-width: 48em) {
    display: contents; 
    
    img{
      width: 95%;
      margin-bottom: 0.5rem;
    }      
  }
`; 

const Noticias = () => {
  return (
    <Section>
      <Container>
        <Title>PARCEIROS COM QUEM JÁ TRABALHAMOS</Title>                
        <ImageContainer>
          <img src={imgDesktop} alt="logo dos parceiros"/>
        </ImageContainer>
        <ImageContainerMobile>
          <img src={imgMobile} alt="logo dos parceiros"/>          
        </ImageContainerMobile>
      </Container>
    </Section>
  );
};

export default Noticias;
