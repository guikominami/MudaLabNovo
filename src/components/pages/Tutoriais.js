import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import SectionComponent from "../elements/SectionComponent";
import TutoriaisConteudo from "./TutoriaisConteudo";

import { TUTORIAL_DATA } from "../../assets/data/imagesInfo";

const EspacoInicial = styled.div`
  min-height: 12vh;

  @media (max-width: 48em) {
    flex-direction: column;
    margin: 5.5rem 0rem 1rem 0rem;
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

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 70%;
  font-weight: 400;

  margin-left: 14rem;

  @media (max-width: 64em) {
    width: 100%;
    text-align: left;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Line = styled.div`
  box-shadow: 1px 5px black;
  width: 70%;
  height: 1px;
  margin-bottom: 1rem;
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
      <Outlet />
      <EspacoInicial></EspacoInicial>
      <Title>Tutoriais</Title>
      <SubText>
        Esta seção tem o objetivo de oferecer referências para a produção de
        protótipos tecnológicos que favoreçam a aprendizagem de estudantes em
        sala de aula e da comunidade escolar como um todo.
        <br></br>
        <br></br>
        Estes protótipos são o resultado do Projeto Escola em Ligação, que teve
        como objetivos a transformação de um espaço junto à escola, desenhado e
        construído com a participação da comunidade escolar e a capacitação de
        estudantes e educadores para o uso de sistemas ativados a energia solar
        e robótica. O projeto foi desenvolvido na Escola Básica 2,3 Manuel da
        Maia, em Lisboa/Portugal, promovido pela Câmara de Lisboa e realizado em
        parceria com a Rés do Chão, uma associação especializada em arquitetura,
        urbanismo e participação.
        <br></br>
        <br></br>        
        A fabricação destes protótipos pode levar em consideração
        conhecimentos de eletrônica básica e elétrica (isso mesmo?). Entretanto,
        são sempre bem-vindas adaptações de acordo com a criatividade e o
        conhecimento da sua comunidade escolar para viabilizar a construção e o
        aprimoramento do dispositivo. Com este tutorial, você poderá construir
        os seguintes protótipos tecnológicos:
        <ul>
          {TUTORIAL_DATA.map((item, index) => (
            <List key={item.index} onClick={() => setIdItem(index)}>
              {item.name}
            </List>
          ))}
        </ul>        
      </SubText>
      <Line />
      {idItem >= 0 ? <TutoriaisConteudo data={TUTORIAL_DATA[idItem]} /> : <></>}
    </SectionComponent>
  );
};

export default Tutoriais;
