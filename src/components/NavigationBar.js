import React, { useState } from "react";
import "./../styles/Navbar.scss";
import Logo from "../images/cooknbake.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <a href="/">
        <img src={Logo}></img>
      </a>
      <button className="dropdown-btn-mobile" onClick={() => toggle ? setToggle(false) : setToggle(true)}>
        <FontAwesomeIcon icon="grip-lines" size="lg" />
      </button>
      { toggle && 
        <div className="dropdown-btn-content">
          <div className="dropdown-content">
          <button>Login</button>
          <button>Signup</button>
          </div>
        </div>
      }
    </nav>
  );
}
