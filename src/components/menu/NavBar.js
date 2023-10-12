import React from 'react';
import { styled } from "styled-components";

import { dataItemsMenu } from './dataMenu';
import MenuItems from './MenuItems';
import SocialMediaMenu from './SocialMediaMenu';

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  margin-right: 6rem;

  @media (max-width: 64em) {
    /* 1024 px  */
    position: fixed;
    top: ${(props) => props.theme.navHeight};

    //para manter o menu a esquerda no mobile
    left: 70;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);

    margin-right: 0rem;

    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: start;

    touch-action: none;
  }
`;

const NavBar = ({ transparent }) => {
  return (
    <Menu>
      {dataItemsMenu.map((menu, index) => {
        return(
          <MenuItems items={menu} key={index} transparent={transparent}/>
        );
      })}
      <SocialMediaMenu transparent={transparent}/>
    </Menu>
  )
}

export default NavBar