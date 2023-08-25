import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo_white from "../../assets/icons/logoWhite.png";
import logo_color from "../../assets/icons/logoColor.png";

const LogoContainer = styled.div`
  img{
    width: 14%;
    height: auto;
  }

  @media (max-width: 64em){
    width: 6rem;

    img{
      width: 100%;
    }    

  }
`

const Logo = ({isTransparent}) => {
  return (
    <LogoContainer >
      <img src={isTransparent ? logo_white : logo_color} alt="logo com descrição MudaLab" />
      <Link to="/" />
    </LogoContainer>
  );
};

export default Logo;
