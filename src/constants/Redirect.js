import React from "react";
import Registration from "../components/Registration/Registration";

const token = localStorage.token;
const Redirect = () => {
  return <Registration />;
};
export default Redirect;
