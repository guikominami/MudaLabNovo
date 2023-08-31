import React from 'react'
import { styled } from "styled-components";

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: left;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
    margin-bottom: 1.5rem;
  }
`;

const SubTextComponent = (props) => {
  return (
    <SubText>
      {props.children}
    </SubText>
  )
}

export default SubTextComponent