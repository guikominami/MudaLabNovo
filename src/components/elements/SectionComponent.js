import React from 'react'

import { styled } from 'styled-components';

const SectionComponent = styled.section`
  min-height: 90vh;
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
    width: 100vw;
    min-height: auto;  
  }
`;

const Section = (props) => {
  return (
    <SectionComponent id={props.id}>
      {props.children}
    </SectionComponent>
  )
}

export default Section
