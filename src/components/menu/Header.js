import React, { useState, useLayoutEffect } from "react";
import { styled } from "styled-components";
import { useWindowScroll } from "react-use";
import { useLocation } from 'react-router-dom'

import Logo from './Logo';
import NavBar from './NavBar';

const Section = styled.section`
  width: 100vw;
  position: fixed;

  background-color: ${(props) =>
    props.transparent ? "rgb(0 0 0 / 30%)" : props.theme.body};

  box-shadow: ${(props) =>
    props.transparent ? "0" : "0 0.125rem 0.25rem 0 rgb(0 0 0 / 31%)"};

  z-index: 3;
`;

const NavBarArea = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 95%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

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

const Header = () => {
  const [transparent, setTransparent] = useState(true);

  const { y } = useWindowScroll();

  const location = useLocation();

  useLayoutEffect(() => {
    //mudar a cor apenas na home
    if ((y > 160 && location.pathname === '/') || (y < 160  && location.pathname !== '/')) {
      setTransparent(false);
    } else if (y < 160 && location.pathname === '/') {
      setTransparent(true);
    }

  }, [y, location.pathname]);  

  return (
    <Section id="navigation" transparent={transparent}>
      <NavBarArea>
        <Logo transparent={transparent}/>
        <NavBar transparent={transparent}/>
      </NavBarArea>
    </Section>
  )
}

export default Header