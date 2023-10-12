import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const SubMenu = styled.span`
  display: ${(props) => (props.open ? "flex" : "none")};

  width: auto;
  height: 7rem;

  background-color: rgb(0 0 0 / 40%);
  color: ${(props) => props.theme.body};

  text-shadow: 1px 1px 2px black;

  position: absolute;
  margin-top: 1rem;
  padding-right: 1.5rem;

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

const Dropdown = ({ submenus, open, close }) => {
  return (
    <SubMenu id='dropdown' open={open} onMouseLeave={() => close()}>
      <ul>
        {submenus.map((submenu, index) => (
          <li key={index}>
            <Link to={submenu.url}>{submenu.title}</Link>
          </li>
        ))}
      </ul>
    </SubMenu>
  );
};

export default Dropdown;
