import React from 'react'
import { styled } from 'styled-components';

const BoxLeft = styled.div`
  width: 50%;
  height: auto;

  align-self: center;

  @media (max-width: 48em){
    margin-top: 1rem;
    width: 85%;    
  }    
`;

const BoxLeftComponent = (props) => {
  return (
    <BoxLeft>
      {props.children}
    </BoxLeft>
  )
}

export default BoxLeftComponent