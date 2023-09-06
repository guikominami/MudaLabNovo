import React from "react";
import { styled } from "styled-components";

import img1 from "../../assets/images/sobre/sobre1.jpg";
import img2 from "../../assets/images/sobre/sobre2.jpg";
import img3 from "../../assets/images/sobre/sobre3.jpg";
import img4 from "../../assets/images/sobre/sobre4.jpg";

const Section = styled.section`
  min-height: 87vh;
  //height: auto;
  width: 98vw;
  background-color: ${(props) => props.theme.body};

  //background-color: yellow;

  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  //vertical
  justify-content: start;
  //horizontal
  align-items: center;
  flex-direction: column;

  @media (max-width: 48em) {
    width: 100vw;
    min-height: auto;  
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 60vh;

  display: flex;
  justify-content: center;
  align-content: center;

  margin-top: 0.5rem;

  @media (max-width: 48em) {
    flex-direction: column;
    margin-bottom: 1rem;    
  }  
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  margin-top: 5rem;
  margin-bottom: 1rem;

  background-color: white;

  border-bottom: 2px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    margin-top: 6rem;
    margin-bottom: 0.5rem;    
  }
`;

const Box = styled.div`
  width: 25%;

  margin-left: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0.125rem 0.125rem 0.25rem 0.25rem rgb(0 0 0 / 10%);

  img {
    margin-top: 1rem;
    width: 85%;
  }

  @media (max-width: 48em) {
    width: 90%;
    margin-top: 1rem;
    margin-bottom: 0.5rem;

    img {
      margin-top: 1rem;
      width: 90%;
    }    
  }  
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 85%;
  margin: 1rem auto;
  font-weight: 500;

  @media (max-width: 48em) {
    width: 90%;
  }    
`;

const Metodologia = () => {
  return (
    <Section>
      <Title>METODOLOGIA</Title>
      <Container>
        <Box>
          <img src={img1} alt=""></img>
          <SubText>
            A partir de <b>processos participativos</b>, desenvolvemos cursos, projetos e 
            protótipos que buscam a transformação de um território.
          </SubText>
        </Box>
        <Box>
          <img src={img2} alt=""></img>
          <SubText>
            <b>Co-criamos</b> soluções adaptadas às necessidades sociais e ambientais,
            através do uso das tecnologias.
          </SubText>
        </Box>
        <Box>
          <img src={img3} alt=""></img>
          <SubText>
            Contribuímos para a <b>democratização e apropriação das tecnologias</b> de 
            baixo custo e de conhecimento aberto.
          </SubText>
        </Box>        
        <Box>
          <img src={img4} alt=""></img>
          <SubText>
            Incentivamos a <b>construção de comunidades de aprendizagem</b> em 
            contextos de vulnerabilidade social.
          </SubText>
        </Box>
      </Container>
    </Section>
  );
};

export default Metodologia;
