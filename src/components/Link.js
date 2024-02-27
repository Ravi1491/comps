import React, { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigation } = useContext(NavigationContext);

  const handleClick = (event) => {
    event.preventDefault();
    navigation(to);
  };

  return <a onClick={handleClick}>{children}</a>;
};

export default Link;
