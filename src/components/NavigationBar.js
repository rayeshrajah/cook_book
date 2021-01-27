import React from "react";
import "./../styles/Navbar.scss";
import Logo from "../images/cooknbake.jpg"

export default function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="logo-of-app">
        <a href="/"><img src={Logo} /></a>
      </div>
    </nav>
  );
}
