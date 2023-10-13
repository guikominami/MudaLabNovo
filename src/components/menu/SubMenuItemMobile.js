import React from 'react'
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ListArea = styled.ul`
  display: none;

  @media (max-width: 64em) {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
  }
`;

const SubMenuItem = styled.li`
  display: none;

  @media (max-width: 64em) {
    margin: 0px;
    padding: 0px;
    font-weight: 500;
    display: flex;
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SubMenuItemMobile = ({ submenus }) => {
  return (
    <>
      <ListArea>
        {submenus.map((submenu, index) => (
          <SubMenuItem key={index}>
            o
            &nbsp;
            <Link to={submenu.url}>{submenu.title}</Link>
          </SubMenuItem>
        ))}
      </ListArea>
    </>
  )
}

export default SubMenuItemMobile