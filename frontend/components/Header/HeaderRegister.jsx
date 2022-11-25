import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Sidebar/Sidebar.css"
import SidebarRegister from "./Sidebar/SidebarRegister";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderRegister() {
  function handleChangeState() {
    let sidebar = document.querySelector(".sidebar");

    if (sidebar.style.display == "") {
      sidebar.style.display = "block";
    } else if (sidebar.style.display == "block") {
      sidebar.style.display = "";
    }
  }

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
          <SidebarRegister handleChangeState={handleChangeState}/>
          <GiHamburgerMenu className="hamburger-menu-button" size={40} onClick={handleChangeState}/>
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
