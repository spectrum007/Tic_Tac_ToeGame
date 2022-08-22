import React from "react";

const Square = ({ value }) => {
  // porps is used to access the parametres of the components ......we can just destructure them and use the exact key word
  console.log({ value });
  return <button type="button"> {value} </button>;
};

export default Square;
