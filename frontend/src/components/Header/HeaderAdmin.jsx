import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Sidebar/Sidebar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarAdmin from "./Sidebar/SidebarAdmin";

export default function HeaderAdmin() {

  function handleChangeState() {
    let sidebar = document.querySelector(".sidebar");

    if (sidebar.style.display == "") {
      sidebar.style.display = "block";
    } else if (sidebar.style.display == "block") {
      sidebar.style.display = "";
    }
  }

  function signOut() {
    localStorage.clear()
  }

  return (
    <>
     <div className="header">
        <div className="header-left">
          <Link to="/">
            <img src={logo} className="header-logo" alt="logo" />
          </Link>
        </div>

        <div className="header-right">
          <SidebarAdmin handleChangeState={handleChangeState}/>
          <GiHamburgerMenu className="hamburger-menu-button" size={40} onClick={handleChangeState}/>
          <Link to="/register">
            <input
              type="button"
              value="Log Out"
              className="button-header"
              onClick={signOut}
            />
          </Link>
          <Link to="/">
            <input
              type="button"
              value="Página Inicial"
              className="button-header"
            />
          </Link>
        </div>
      </div>
    </>
  )
}