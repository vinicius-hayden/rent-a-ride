import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsXLg } from "react-icons/bs";

export default function SidebarUser({ handleChangeState }) {

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
    <div className="sidebar">
      <Row>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Col>
            <button type="button" onClick={handleChangeState} className="sidebar-close-button">
              <BsXLg size={20}></BsXLg>
            </button>
          </Col>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Col>
            <div className="initials-sidebar">
              <h3>{firstLetter + lastLetter}</h3>
            </div>
          </Col>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Col>
            <Link to="/">
              <input type="button" value="Menu" className="sidebar-button" />
            </Link>
          </Col>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Col>
            <input type="button" value="Sair" className="sidebar-button" onClick={signOut} />
          </Col>
        </div>
      </Row>
    </div>
  )
}