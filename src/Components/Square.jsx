import React from "react";

const Square = ({ value }) => {
  // porps is used to access the parametres of the components ......we can just destructure them and use the exact key word
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};

export default Square;
