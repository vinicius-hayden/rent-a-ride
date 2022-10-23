import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function HeaderRegister() {
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
          <Link to="/login">
            <input
              type="button"
              value="Iniciar sessão"
              className="button-header"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
