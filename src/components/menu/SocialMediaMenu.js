import React, { useContext } from "react";
import { styled } from "styled-components";

import LinkedIn from "../../assets/icons/LinkedIn";
import Instagram from "../../assets/icons/Instagram";

import { LanguageContext } from "../../context/language.context";

import englishIcon from "../../assets/icons/en_US.png";
import portugueseIcon from "../../assets/icons/pt_BR.png";

const MenuArea = styled.div`
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

const Icon = styled.img`
  height: 1.7rem;
  margin-top: 0.2rem;
  margin-right: 0.1rem;
  
  &:hover {
    cursor: pointer;
  }
`;

const SocialMediaMenu = ({ transparent }) => {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <>
      <MenuArea>
        <a
          href="https://www.instagram.com/labmudalab"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram color={transparent ? "white" : "black"} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <LinkedIn color={transparent ? "white" : "black"} />
        </a>
        <Icon
          src={englishIcon}
          onClick={() => changeLanguage("english")}
          alt="English icon"
        />
        <Icon
          src={portugueseIcon}
          onClick={() => changeLanguage("portuguese")}
          alt="Portuguese icon"
        />
      </MenuArea>
      <SocialMediaMenuMobile>
        <a
          href="https://www.instagram.com/labmudalab"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram color={"black"} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <LinkedIn color={"black"} />
        </a>
      </SocialMediaMenuMobile>
    </>
  );
};

export default SocialMediaMenu;
