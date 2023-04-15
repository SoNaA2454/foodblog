import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="!#">
            <img src={logo} alt="" width="150" height="100" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
