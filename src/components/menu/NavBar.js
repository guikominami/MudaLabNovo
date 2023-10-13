import React, { useState } from 'react';
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

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 3px;

  background: ${(props) =>
    props.transparent ? props.theme.body : props.theme.text};

  position: absolute;
  top: 2rem;
  left: 88%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024 px  */
    display: flex;
  }

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 3px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) =>
      props.transparent ? props.theme.body : props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-48deg)" : "rotate(0)")};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(48deg)" : "rotate(0)")};
  }
`;

const NavBar = ({ transparent }) => {
  const [click, setClick] = useState(0);

  const SubMenuItemClickHandler = () => {
    setClick(0);
  }

  return (
    <>
      <HamburgerMenu
        transparent={transparent}
        click={click}
        onClick={() => setClick(prev => !prev)}        
      >
        &nbsp;
      </HamburgerMenu>       
      <Menu click={click}>
        {dataItemsMenu.map((menu, index) => {
          return(
            <MenuItems 
              items={menu} 
              key={index} 
              transparent={transparent}
              click={SubMenuItemClickHandler}
            />
          );
        })}
        <SocialMediaMenu transparent={transparent}/>
      </Menu>    
    </> 
  )
}

export default NavBar