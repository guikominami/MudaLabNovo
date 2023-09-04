import React from 'react'
import { styled } from 'styled-components';

const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
    margin-top: 1.5rem;
  }
`;

const SubtitleComponent = (props) => {
  return (
    <Subtitle>
      {props.children}
    </Subtitle>
  )
}

export default SubtitleComponent