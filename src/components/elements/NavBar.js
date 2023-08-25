import React from "react";
import { styled } from "styled-components";

const NavBarComponent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 95%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  //background-color: ${(props) => props.background ? "transparent" : "aliceblue"};

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    height: ${(props) => props.theme.navHeightMobile};
    width: 100%;

    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;

const NavBar = (props) => {
  return (
    <NavBarComponent>
      {props.children}
    </NavBarComponent>
  );
};

export default NavBar;
