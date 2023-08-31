import React, { useState, useLayoutEffect } from "react";
import { useWindowScroll } from "react-use";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "../elements/NavBar";
import LinkedIn from "../../assets/icons/LinkedIn";
import Instagram from "../../assets/icons/Instagram";

const Section = styled.section`
  width: 100vw;
  position: fixed;

  background-color: ${(props) =>
    props.isTransparent ? "rgb(0 0 0 / 30%)" : props.theme.body};

  /*   background-color: ${(props) =>
    props.background ? "transparent" : props.theme.body}; */

  box-shadow: ${(props) =>
    props.isTransparent ? "0" : "0 0.125rem 0.25rem 0 rgb(0 0 0 / 31%)"};

  z-index: 3;
`;

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

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;

  color: ${(props) =>
    props.isTransparent ? props.theme.body : props.theme.text};

  text-shadow: ${(props) =>
    props.isTransparent ? "1px 1px black" : "0"};     

  cursor: pointer;
  
  width: 100%;
  
  //para evitar de quebrar a linha na palavra Quem Somos
  white-space: nowrap;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) =>
      props.isTransparent ? props.theme.body : props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;
    width: 90%;
    color: ${(props) => props.theme.text};
    text-shadow: none;
    &::after {
      display: none;
    }
  } 
`;

const SubMenuItem = styled.span`
  width: auto;
  height: 7rem;

  background-color: rgb(0 0 0 / 40%);
  color: ${(props) => props.theme.body};
  
  text-shadow: 1px 1px 2px black;

  position: absolute;
  margin-top: 1rem;
  padding-right: 1.5rem;  

  display: flex;
  //vertical
  align-items: center;
  //horizontal
  justify-content: flex-start;

  font-weight: 500;

  box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 31%);

  @media (max-width: 64em) {
    /* 1024 px  */
    display: none;
  }
`;

const SocialMediaMenu = styled.div`
  display: flex;
  margin-left: 2rem;

  @media (max-width: 64em) {
    display: none;
  }
`;

const SocialMediaMenuMobile = styled.div`
  display: none;

  @media (max-width: 64em) {
    display: flex;
    //vertical
    align-items: flex-start;
    //horizontal
    align-self: flex-start;

    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

const SubMenuItemMobile = styled.li`
  display: none;

  @media (max-width: 64em) {
    display: flex;
    width: 100%;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 3px;

  background: ${(props) =>
    props.isTransparent ? props.theme.body : props.theme.text};

  position: absolute;
  top: 2rem;
  left: 86%;
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
      props.isTransparent ? props.theme.body : props.theme.text};
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

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const [isHome, setHome] = useState(true);

  //submenu
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenProjects, setIsOpenProjects] = useState(false);

  const subMenuProjectItems = [
    <Link to="/laboratorios">LABORATÓRIOS</Link>,
    <Link to="/educacao">MATERIAIS PEDAGÓGICOS</Link>,
    <Link to="/robotica">ROBÓTICA E PROGRAMAÇÃO</Link>,
    <Link to="/sustentabilidade">SUSTENTABILIDADE</Link>,
  ];

  const subMenuAboutItems = [
    <Link to="/metodologia">METODOLOGIA</Link>,
    <Link to="/equipe">EQUIPE</Link>,
    <Link to="/noticias">NOTÍCIAS</Link>,
    <Link to="/parceiros">PARCEIROS</Link>,
/*     <Link to="/videos">VÍDEOS</Link>, */
  ];

  const { y } = useWindowScroll();

  useLayoutEffect(() => {
    //mudar a cor apenas na home
    if (y > 160 && isHome) {
      setTransparent(false);
    } else if (y < 160 && isHome) {
      setTransparent(true);
    }

    setIsOpenAbout(false);
    setIsOpenProjects(false);
  }, [y, isHome]);

  //console.log(transparent);

  return (
    <Section id="navigation" isTransparent={transparent}>
      <NavBar>
        <Link
          to="/"
          onClick={() => {
            setHome(true);
          }}
        >
          <Logo isTransparent={transparent} />
        </Link>
        <HamburgerMenu
          click={click}
          onClick={() => setClick(!click)}
          isTransparent={transparent}
        >
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <MenuItem
            onClick={() => {
              setHome(true);
              setClick(!click);
            }}
            isTransparent={transparent}
            onMouseEnter={() => {
              setIsOpenProjects(false);
              setIsOpenAbout(false);
            }}
          >
            <Link to="/">QUEM SOMOS</Link>
          </MenuItem>
          <MenuItem
            isTransparent={transparent}
            onMouseEnter={() => {
              setIsOpenProjects(true);
              setIsOpenAbout(false);
            }}
          >
            NOSSOS PROJETOS
            {isOpenProjects && (
              <SubMenuItem
                onMouseEnter={() => {
                  setIsOpenProjects(true);
                  setIsOpenAbout(false);
                }}
                onMouseLeave={() => setIsOpenProjects(false)}
              >
                <ul>
                  {subMenuProjectItems.map((subMenuItem, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setTransparent(false);
                        setHome(false);
                      }}
                    >
                      {subMenuItem}
                    </li>
                  ))}
                </ul>
              </SubMenuItem>
            )}
          </MenuItem>
          <SubMenuItemMobile>
            <ul>
              {subMenuProjectItems.map((subMenuItem, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setTransparent(false);
                    setHome(false);
                    setClick(!click);
                  }}
                >
                  {subMenuItem}
                </li>
              ))}
            </ul>
          </SubMenuItemMobile>
          <MenuItem
            isTransparent={transparent}
            onMouseEnter={() => {
              setIsOpenAbout(true);
              setIsOpenProjects(false);
            }}
          >
            SOBRE NÓS
            {isOpenAbout && (
              <SubMenuItem
                onMouseEnter={
                  () => setIsOpenAbout(true)
                  //setIsOpenProjects(false)
                }
                onMouseLeave={() => setIsOpenAbout(false)}
              >
                <ul>
                  {subMenuAboutItems.map((subMenuItem, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setTransparent(false);
                        setHome(false);
                      }}
                    >
                      {subMenuItem}
                    </li>
                  ))}
                </ul>
              </SubMenuItem>
            )}
          </MenuItem>
          <SubMenuItemMobile>
            <ul>
              {subMenuAboutItems.map((subMenuItem, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setTransparent(false);
                    setHome(false);
                    setClick(!click);
                  }}
                >
                  {subMenuItem}
                </li>
              ))}
            </ul>         
          </SubMenuItemMobile>
          {/* <MenuItem><Link to="/tutoriais">TUTORIAIS</Link></MenuItem> */}

          <SocialMediaMenu>
            <a
              href="https://www.instagram.com/labmudalab"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram color={transparent ? "white" : "black"} />
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noreferrer"
            >
              <LinkedIn color={transparent ? "white" : "black"} />
            </a>
          </SocialMediaMenu>
          <SocialMediaMenuMobile>
            <a
              href="https://www.instagram.com/labmudalab"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram color={"black"} />
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noreferrer"
            >
              <LinkedIn color={"black"} />
            </a>
          </SocialMediaMenuMobile>          
        </Menu>
      </NavBar>
    </Section>
  );
};

export default Navigation;
