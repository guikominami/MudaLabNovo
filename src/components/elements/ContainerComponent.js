import React from 'react'
import { styled } from 'styled-components';

const Container = styled.div`
  width: 90%;
  min-height: 50vh;
  
  display: flex;
  align-content: center;
  justify-content: center;

  margin: 5rem 0rem 2rem 0rem;

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0.125rem 0.125rem 0.25rem 0.25rem rgb(0 0 0 / 10%);

  @media (max-width: 48em) {
    width: 92%;

    flex-direction: column;
    margin: 5.5rem 0rem 1rem 0rem;
  }
`;

const ContainerComponent = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default ContainerComponent