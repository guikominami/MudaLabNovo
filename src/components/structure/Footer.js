import React from "react";
import styled from "styled-components";
import Instagram from "../../assets/icons/Instagram";
import Linkedin from "../../assets/icons/LinkedIn";
import logo from "../../assets/icons/logoWhite.png";

const Section = styled.section`
  height: 6rem;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Container = styled.div`
  width: 80%;
  display: flex;
  //flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;  
  }
`;

const IconList = styled.div`
  display: flex;
  justify-content: end;

  width: 20%;
  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  } 
`;

const Logo = styled.div`
  width: 40%;
  img {
    width: 30%;
  }

  @media (max-width: 48em) {
    width: 50%;
    img {
      width: 60%;
    }    
  } 
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <Logo>
          <img src={logo} alt="logo escrito MudaLab" />
        </Logo>      
        <IconList>
          <a href="https://www.instagram.com/labmudalab" target="_blank" rel="noreferrer">
            <Instagram color="white"/>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin color="white"/>
          </a>
        </IconList>       
      </Container>      
    </Section>
  );
};

export default Footer;
