import React from "react";
import { styled } from "styled-components";

import LinkedIn from "../../assets/icons/LinkedIn";
import Instagram from "../../assets/icons/Instagram";

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

const SocialMediaMenu = ({ transparent }) => {
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
