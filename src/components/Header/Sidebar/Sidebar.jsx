import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsXLg } from "react-icons/bs";

export default function Sidebar({ handleChangeState }) {
  return (
    <div className="sidebar">
      <Row>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Col>
          <button type="button" onClick={handleChangeState} className="sidebar-close-button">
            <BsXLg size={20} color='white'></BsXLg>
          </button>
        </Col>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Col>
          <Link to="/register">
            <input type="button" value="Sign Up" className="sidebar-button" />
          </Link>
        </Col>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Col>
          <Link to="/login">
            <input type="button" value="Sign in" className="sidebar-button"/>
          </Link>
        </Col>
        </div>
      </Row>
    </div>
  );
}