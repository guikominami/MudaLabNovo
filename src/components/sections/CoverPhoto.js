import React from "react";
import { styled } from "styled-components";

import imagemCapaDesktop from "../../assets/images/cover/coverDesktop.jpg"
import imagemCapaMobile from "../../assets/images/cover/coverMobile.jpg"
import imagemCapaTablet from "../../assets/images/cover/coverTablet.jpg"

const Section = styled.section`
  //min-height: 100vh;
  width: 100%;

  @media (max-width: 64em) {
    //height: 85vh;
    //min-height: 94vh;
  }  
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img{
    width: 100%;
  }

  @media (max-width: 64em) {
    img{
      width: 100%;
    }    
  }

  @media (max-width: 48em) {
    img{
      width: 100%;
    }     
  }
`;

const ImageMobile = styled.div`
  display: none;

  @media (max-width: 40em){
    display: flex;
  }  
`

const ImageTablet = styled.div`
  display: none;

  @media (min-width: 40em) and (max-width: 64em) {
    display: flex;
  }   
`

const ImageDesktop = styled.div`
  display: flex;
  
  @media (max-width: 64em) {
    display: none;
  }   
`

const CoverPhoto = () => {
  return (
    <Section id="cover-photo">
      <Container>
        <ImageDesktop>
          <img src={imagemCapaDesktop} alt="Imagem de capa"/>
        </ImageDesktop>
        <ImageTablet>
          <img src={imagemCapaTablet} alt="Imagem de capa"/>
        </ImageTablet>        
        <ImageMobile>
          <img src={imagemCapaMobile} alt="Imagem de capa"/>
        </ImageMobile>
      </Container>
    </Section>
  );
};

export default CoverPhoto;
