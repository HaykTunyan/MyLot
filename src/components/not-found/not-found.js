import React from "react";

export default ({ staticContext = {} }) => {
  staticContext.status = 404;
  return (
    <div className="conatiner">
      <h1 className="text-center header_blues py-5">Այստեղ ոչինչ չկա:</h1>
    </div>
  );
};
