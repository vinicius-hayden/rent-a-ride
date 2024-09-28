import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar/Sidebar";

import { FaSignOutAlt } from "react-icons/fa";
import SidebarUser from "./Sidebar/SidebarUser";
import SidebarAdmin from "./Sidebar/SidebarAdmin";

export default function HeaderBooking() {

  function handleChangeState() {
    const url = ''
    let sidebar = document.querySelector('.sidebar');

    if (sidebar.style.display == '') {
      sidebar.style.display = 'block';
    }
    else if (sidebar.style.display == 'block') {
      sidebar.style.display = '';
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function names(name, lastName) {
    const [first] = name.split(' ');
    const last = lastName.split(' ').pop();
    return [capitalizeFirstLetter(first), capitalizeFirstLetter(last)];
  }

  function initials(name, lastName) {
    const first = name[0].toUpperCase();
    const last = lastName[0].toUpperCase();
    return [first, last];
  }

  function signOut() {
    localStorage.clear()
    window.location = "/";
  }

  let [nome, sobrenome] = names(localStorage.getItem('nome'), localStorage.getItem('sobrenome'));
  let [firstLetter, lastLetter] = initials(nome, sobrenome);

  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo-components">
          {/*Levar à home do site*/}
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} className="header-logo" alt="logo" />
            <div className="header-logo-content">
              <h1 className="logo-text">Emprescar </h1>
              <p className="logo-text-description">
                Freedom to go anywhere, anytime
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="header-right">
        <SidebarUser handleChangeState={handleChangeState}></SidebarUser>
        <GiHamburgerMenu
          className="hamburger-menu-button"
          size={40}
          onClick={handleChangeState}
        />

        <Link to="/" className="header-right-bookings">
          <input
            type="button"
            value="Menu"
            className="button-header"
          />
        </Link>

        <div className="initials">
          <h3>{firstLetter + lastLetter}</h3>
        </div>

        <div className="name">
          <h3> {`${nome} ${sobrenome}`} </h3>
        </div>

        <Link to="/" className="header-right-signin">
          <button className="button-logout" onClick={signOut}>
            <FaSignOutAlt size={15} />
          </button>
        </Link>
      </div>
    </div>
  );
}
