import React from "react";
import { styled } from "styled-components";

import Subtitle from "../elements/SubtitleComponent";
import SubText from "../elements/SubTextComponent";

const Section = styled.section`
  height: 80vh;
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
    min-height: 70vh;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Box = styled.div`
  width: 100%;

  font-size: ${(props) => props.theme.fontxxl};

  @media (max-width: 48em) {
    width: 95%;
    margin-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CoverDescription = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Subtitle>
            Todos e todas podem ser transformadores de realidades!
          </Subtitle>
          <br></br>
          <SubText>
            É com base nessa visão que apostamos no diálogo entre a
            educação e a tecnologia para desenvolver cursos, projetos,
            experimentos e traquitanas que têm como premissa a transformação
            social, cultural e ambiental. 
            <br></br>
            <br></br>            
            Eletrônica, fabricação digital, robótica e programação aliados à 
            sustentabilidade, à inclusão, à mobilização social e a conteúdos e 
            conhecimentos utilizados para cocriar soluções, reflexões e caminhos 
            para seguirmos coletivamente.
          </SubText>
        </Box>
      </Container>
    </Section>
  );
};

export default CoverDescription;
