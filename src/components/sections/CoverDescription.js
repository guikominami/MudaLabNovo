import React, { useContext } from "react";
import { styled } from "styled-components";
import { LanguageContext } from "../../context/language.context";
import { homeText } from "../../assets/data/languageText";

const Section = styled.section`
  height: 70vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  //vertical
  justify-content: center;
  //horizontal
  align-items: center;
  //flex-direction: column;

  @media (max-width: 48em) {
    min-height: 80vh;
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  
  @media (max-width: 64em) {
    justify-content: center;
    //min-height: 70vh;
  }

  @media (max-width: 48em) { 
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Box = styled.div`
  width: 100%;

  margin-left: 4rem;
  margin-right: 4rem;     

  @media (max-width: 48em) {
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: left;
    margin-top: 1rem;

  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};    
    width: 80%;
    margin-left: 2rem;     
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: left;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};        
    width: 80%;
    margin-left: 2rem;     
  }  

`;

const CoverDescription = () => {
  
  const { language } = useContext(LanguageContext);
  
  return (
    <Section>
      <Container>
        <Box>
          <Subtitle>
            {homeText[language].title}
          </Subtitle>
          <br></br>
          <SubText>
            {homeText[language].body1}
            <br></br>
            <br></br>            
            {homeText[language].body2}
          </SubText>
        </Box>
      </Container>
    </Section>
  );
};

export default CoverDescription;
