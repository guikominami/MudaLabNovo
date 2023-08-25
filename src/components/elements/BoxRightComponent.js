import React from 'react'
import { styled } from 'styled-components';

const BoxRight = styled.div`
  width: 50%;
  height: auto;

  margin-top: 0rem;
  margin-bottom: 1rem;

  @media (max-width: 48em) {
    width: 87%;
    margin-bottom: 1rem;

    display: flex;
    //vertical  
    justify-content: center;
    //horizontal  
    align-items: center;
    //vertical  
    align-self: center;  
  }
`;

const BoxRightComponent = (props) => {
  return (
    <BoxRight>
      {props.children}
    </BoxRight>
  )
}

export default BoxRightComponent