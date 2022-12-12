import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsXLg } from "react-icons/bs";

export default function SidebarAdmin({ handleChangeState }) {

  function signOut() {
    localStorage.clear()
    window.location = "/";
  }

  return (
    <div className="sidebar">
      <Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Col>
            <button type="button" onClick={handleChangeState} className="sidebar-close-button">
              <BsXLg size={20} color={"white"}></BsXLg>
            </button>
          </Col>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Col>
            <div className="name">
              <h3> ADMIN</h3>
            </div>
          </Col>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Col>
            <Link to="/admin">
              <input type="button" value="Adminstração" className="sidebar-button" />
            </Link>
          </Col>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Col>
              <input type="button" value="Sair" className="sidebar-button" onClick={signOut}/>
          </Col>
        </div>
      </Row>
    </div>
  )
}