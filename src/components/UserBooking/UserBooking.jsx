import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "./UserBooking.scss"
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default function UserBooking() {

  return (
    <>
      <Header />
      <div className="booking-title">
        <h1> Minhas reservas</h1>
        <div className="left">
          <Link to={"/"}>
            <BiArrowBack size={40} color="#FBC02D" className="arrowback" />
          </Link>
        </div>
      </div>
      <div className="use-bootstrap">
        <Stack gap={3} style={{ paddingLeft: 6, paddingRight: 6}}>
          {/* {productsInCart.map((product, index) => ( */}
          <Card style={{ width: '15rem', 'borderRadius': '5px', 'border': 'solid 1px #D3D3D3'}} key={"1"}>
            <Card.Img variant="top" src="https://cdn.autopapo.com.br/box/uploads/2017/06/26163325/fiat-palio-732x488.jpg" style={{ 'height': '135px','borderRadius': '5px 5px 0px 0px'}} />
            <Card.Body>
              <Card.Title>Fiat Palio</Card.Title>
              <Card.Text style={{'fontStyle' : 'none'}}>
                Esse carro é top demais
              </Card.Text>
              <Card.Subtitle style={{'fontStyle' : 'none'}} className="mb-3">
                22/12/2022 até 02/01/2023
              </Card.Subtitle>
              <Row className='justify-content-center'>
                <Button variant="primary"> Ver detalhes  </Button>
              </Row>
            </Card.Body>
          </Card>
          {/* ))} */}
        </Stack>
      </div>
      <Footer />
    </>
  )
}