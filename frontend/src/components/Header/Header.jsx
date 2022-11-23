import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar/Sidebar";

export default function Header() {

  function handleChangeState() {
    let sidebar = document.querySelector('.sidebar');

    if (sidebar.style.display == '') {
      sidebar.style.display = 'block';
    }
    else if (sidebar.style.display == 'block') {
      sidebar.style.display = '';
    }
  }

  return (
    <>
      <div className="header">
        <div className="header-left">
          <div className="header-logo-components">
            {/*Levar à home do site*/}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={logo} className="header-logo" alt="logo" />
              <div className="header-logo-content">
                <h1 className="logo-text">Emprescar </h1>
                <p className="logo-text-description">Liberdade para ir onde quiser</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="header-right">
          <Sidebar handleChangeState={handleChangeState}></Sidebar>
          <GiHamburgerMenu className="hamburger-menu-button" size={40} onClick={handleChangeState}>

          </GiHamburgerMenu>
          <Link to="/register" className="header-right-signup">
            <input
              type="button"
              value="Criar conta"
              className="button-header"
            />
          </Link>

          <Link to="/login" className="header-right-signin">
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