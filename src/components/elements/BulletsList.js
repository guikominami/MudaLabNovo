import React from "react";

const BulletsList = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul> 
    </>
  );
};

export default BulletsList;
