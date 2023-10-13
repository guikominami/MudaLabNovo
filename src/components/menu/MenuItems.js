import { styled } from "styled-components";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";
import SubMenuItemMobile from "./SubMenuItemMobile";

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontxl};
  font-weight: ${(props) =>
    props.transparent ? 500 : 600};
  
  color: ${(props) =>
    props.transparent ? props.theme.body : props.theme.text};

  text-shadow: ${(props) => (props.transparent ? "1px 1px black" : "0")};

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
      props.transparent ? props.theme.body : props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;
    width: 90%;
    color: ${(props) => props.theme.text};
    font-weight: 600;
    text-shadow: none;
    &::after {
      display: none;
    }
  }
`;

const MenuItems = ({ items, transparent, click }) => {
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [menuItemId, setMenuItemId] = useState("");

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      setMenuItemId(event.target.getAttribute("id"));

      //if user change the menu. It will compare the last component id with the new one.
      if (
        (dropdownOpen &&
          event.target.getAttribute("id") !== menuItemId &&
          event.target.getAttribute("type") === "menu") ||
        (dropdownOpen && event.clientY > 170)
      ) {
        setDropDownOpen(false);
      }
    };

    document.addEventListener("mouseover", handler);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mouseover", handler);
    };
  }, [dropdownOpen, menuItemId]);

  //function call from DropDown component when the mouse leave the dropdown area.
  const CloseDropDown = () => {
    setDropDownOpen(false);
  };

  return (
    <MenuItem 
      transparent={transparent} 
      ref={ref} 
      onClick={click}      
    >
      {items.submenu ? (
        <span
          type="menu"
          id={items.title}
          onMouseOver={() => setDropDownOpen(true)}
        >
          {items.title}{" "}
          <Dropdown
            submenus={items.submenu}
            open={dropdownOpen}
            close={CloseDropDown}
          />
          <SubMenuItemMobile
            submenus={items.submenu}
          />          
        </span>
      ) : (
        <Link type="menu" id={items.title} to={items.url}>
          {items.title}
        </Link>
      )}
    </MenuItem>
  );
};

export default MenuItems;
