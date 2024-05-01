import React from "react";
import { styled } from "styled-components";
import linkIcon from "../../assets/icons/link.png";

const Link = styled.a`
    color: blue;
    text-decoration: none;

    &:hover {
        color: red;
        cursor: pointer;
    }
    img {
      width: 2%;
      vertical-align: middle;
    }
`;

const BulletsList = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.key}>
            {item.name} - <Link href={item.link}><img src={linkIcon} alt="link" /></Link>         
          </li>
        ))}
      </ul> 
    </>
  );
};

export default BulletsList;
