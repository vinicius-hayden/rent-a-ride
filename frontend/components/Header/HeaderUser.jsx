import { Link } from "react-router-dom";
import logo from "./logo.png";

import "./Header.scss";

export default function HeaderUser() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          {/*Levar à home do site*/}
          <Link to="/">
            <img src={logo} className="header-logo" alt="logo" />
          </Link>
        </div>

        <div className="header-right">
          <div className="initials">
            <h3>BR</h3>
          </div>

          <div className="name">
            <h3>Olá, Bruno Rocha!</h3>
          </div>
      
          <Link to="/">
            <button className="button-logout">X</button>
          </Link>
        </div>
      </div>
    </>
  );
}
