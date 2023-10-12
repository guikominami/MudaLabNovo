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

const SocialMediaMenu = ({ transparent }) => {
  return (
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
  );
};

export default SocialMediaMenu;
