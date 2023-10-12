import React from 'react'
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const SubMenuItem = styled.li`
  display: none;

  @media (max-width: 64em) {
    display: flex;
    width: 100%;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const SubMenuItemMobile = ({ submenus }) => {
  return (
    <>
      <ul>
        {submenus.map((submenu, index) => (
          <SubMenuItem key={index}>
            <Link to={submenu.url}>{submenu.title}</Link>
          </SubMenuItem>
        ))}
      </ul>
    </>
  )
}

export default SubMenuItemMobile