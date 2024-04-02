import React from "react";

const BulletsList = ({ data }) => {
  console.log("bullets");
  console.log(data);

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
