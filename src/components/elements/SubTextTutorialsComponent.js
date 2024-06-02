import React from 'react'
import { styled } from "styled-components";

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 70%;
  font-weight: 400;
  white-space: pre-line;
  
  margin-left: 14rem;

  @media (max-width: 64em) {
    width: 90%;
    text-align: left;
    font-size: ${(props) => props.theme.fontlg};
    margin: 1rem 3rem 1rem 4rem;
  }

  @media (max-width: 40em) {
    width: 80%;
    font-size: ${(props) => props.theme.fontmd};
    margin: 0rem 0rem 1rem 2rem;
  }
`;

const SubTextTutorialsComponent = (props) => {
  return (
    <SubText>
      {props.children}
    </SubText>
  )
}

export default SubTextTutorialsComponent