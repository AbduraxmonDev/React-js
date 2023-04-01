import React from "react";

const Header = ({ header }) => {
  return (
    <header className="header">
      <h1>{header[0].id}</h1>
      <h1>{header[0].name}</h1>
    </header>
  );
};

export default Header;
