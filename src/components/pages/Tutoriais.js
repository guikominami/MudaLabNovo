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
  width: 65%;
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
    }
`;

const Tutoriais = () => {

  const [idItem, setIdItem] = useState();

  console.log(idItem);
  console.log(TUTORIAL_DATA[idItem]);

  return (
    <SectionComponent>
      <Outlet />
      <EspacoInicial></EspacoInicial>
      <Title>Tutoriais</Title>
      <SubText>
        Esta seção tem o objetivo de oferecer referências sobre como produzir
        dispositivos tecnológicos que favoreçam a aprendizagem de todos os
        estudantes em salas de aulas inclusivas. Os materiais foram produzidos
        por educadores e alunos que participaram do Projeto Escola em Ligação,
        promovidos pela Câmara de Lisboa e que envolvem várias áreas do
        conhecimento.
      </SubText>
      <SubText>
        Com este tutorial, você poderá construir as seguintes tecnologias:
        <ul>
        {TUTORIAL_DATA.map((item, index) => (
          <List onClick={() => setIdItem(index)}>
              {item.name}
          </List>
        ))}      
        </ul>
      </SubText>
      <Line />
      {
        idItem >= 0 ?
        <TutoriaisConteudo data={TUTORIAL_DATA[idItem]}/>
        :
        <></>
      }      
    </SectionComponent>
  );
};

export default Tutoriais;
