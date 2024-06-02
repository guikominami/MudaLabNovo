import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import SectionComponent from "../elements/SectionComponent";
import SubTextTutorialsComponent from "../elements/SubTextTutorialsComponent";

import TutoriaisConteudo from "./TutoriaisConteudo";

import { TUTORIAL_DATA } from "../../assets/data/imagesInfo";

const Box = styled.div`
  width: 100%;

  margin-bottom: 2rem;

  //display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 48em) {
    display: flex;

    width: 100%;

    height: auto;

    margin-bottom: 1rem;
    margin-left: 0rem;
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const EspacoInicial = styled.div`
  min-height: 12vh;

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 1000;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  margin: 0rem 0rem 0rem 14rem;

  position: relative;
  color: ${(props) => props.theme.text};

  //horizontal
  align-self: self-start;

  @media (max-width: 64em) {
    margin: 2rem 0rem 2rem 4rem;

    font-size: ${(props) => props.theme.fontxl};
  }  

  @media (max-width: 48em) {
    margin: 1rem 0rem 1rem 2rem;

    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Line = styled.div`
  box-shadow: 1px 5px black;
  width: 70%;
  height: 1px;
  margin: 2rem 0rem 2rem 14rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 64em) {
    width: 90%;

    margin: 2rem 0rem 2rem 4rem;
  }

  @media (max-width: 40em) {
    width: 84%;
    margin: 0rem 0rem 1rem 0rem;
  }  
`;

const List = styled.li`
  color: darkblue;
  text-decoration: none;
  /* Changing the color */
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const Tutoriais = () => {
  const [idItem, setIdItem] = useState();

  return (
    <SectionComponent>
      <Box>
      <EspacoInicial></EspacoInicial>
        <Title>Tutoriais</Title>
        <SubTextTutorialsComponent>
          Esta seção tem o objetivo de oferecer referências para a produção de
          protótipos tecnológicos que favoreçam a aprendizagem de estudantes em
          sala de aula e da comunidade escolar como um todo.
          <br></br>
          <br></br>
          Estes protótipos são o resultado do Projeto Escola em Ligação, que
          teve como objetivos a transformação de um espaço junto à escola,
          desenhado e construído com a participação da comunidade escolar e a
          capacitação de estudantes e educadores para o uso de sistemas ativados
          a energia solar e robótica. O projeto foi desenvolvido na Escola
          Básica 2,3 Manuel da Maia, em Lisboa/Portugal, promovido pela Câmara
          de Lisboa e realizado em parceria com a Rés do Chão, uma associação
          especializada em arquitetura, urbanismo e participação.
          <br></br>
          <br></br>A fabricação destes protótipos pode levar em consideração
          conhecimentos de eletrônica básica, elétrica e programação.
          Entretanto, são sempre bem-vindas adaptações de acordo com a
          criatividade e o conhecimento da sua comunidade escolar para
          viabilizar a construção e o aprimoramento do dispositivo. Com estes
          tutoriais, você poderá construir os seguintes protótipos tecnológicos:
          <ul>
            {TUTORIAL_DATA.map((item, index) => (
              <List key={item.index} onClick={() => setIdItem(index)}>
                {item.name}
              </List>
            ))}
          </ul>
        </SubTextTutorialsComponent>
        <Line />
        {idItem >= 0 ? (
          <TutoriaisConteudo data={TUTORIAL_DATA[idItem]} />
        ) : (
          <></>
        )}        
      </Box>
    </SectionComponent>
  );
};

export default Tutoriais;
