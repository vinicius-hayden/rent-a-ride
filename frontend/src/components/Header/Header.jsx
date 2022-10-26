import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css"
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
          {/*Levar à home do site*/}
          <Link to="/">
            <img src={logo} className="header-logo" alt="logo" />
          </Link>
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