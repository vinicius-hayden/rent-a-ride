import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { DateRangePicker } from 'rsuite';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { BiArrowBack } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io"

import './ProductRental.scss';

export default function ProductRental() {
  const { idProduct } = useParams();
  const [time, setTime] = useState([]);
  const [product, setProduct] = useState({ name: "", description: "", category: { name: '' }, city: { name: '' }, features: [] });
  const [value, onChange] = useState(new Date());
  const [city, setCity] = useState([]);
  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  function rentProduct() {

    if (true) {
      swal({
        title: "Uhuuuul!",
        text: "Sua reserva foi feita :)",
        icon: "success",
        button: {
          text: "Voltar para a Home",
        },

      })
        .then(() => window.location = "/");
    }
  }

  useEffect(() => {
    fetch(`http://localhost:9000/products/${idProduct}`, requestConfigurationGet)
      .then((response) => response.json())
      .then((productsJSON) => setProduct(productsJSON));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9000/cities", requestConfigurationGet)
      .then((response) => response.json())
      .then((citiesJSON) => setCity(citiesJSON));
  }, []);

  return (
    <>
      <Header />
      <h1 style={{ "marginTop": "125px", "textAlign": "center" }}>Complete seus dados</h1>
      <div className="use-bootstrap">
        <div className="d-flex justify-content-center mt-5" id="card-product">
          <Card.Body className="m-3">
            <Form className="mt-5 m-3">
              <Form.Group className="mb-3">
                <Form.Label >Nome</Form.Label>
                <Form.Control type="text" disabled placeholder="Bruno" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control type="text" disabled placeholder="Rocha" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" disabled placeholder="brunorocha@email.com" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cidade</Form.Label>
                <Form.Select id="disabledSelect">
                  <option value="cities" disabled selected>
                    Selecione sua Cidade
                  </option>
                  {city.map((city, index) => (
                    <option value={city.name} key={index}>{city.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form>
          </Card.Body>
          <div className="product-detail">
            <h3> Detalhes do produto </h3>
            <Card style={{ width: '15rem' }}>
              <Card.Subtitle>
                {product.category.name} - {product.category.description}
              </Card.Subtitle>
              <Card.Img variant="top" src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960" />
              <Card.Body>
                <Card.Title><strong>{product.name}</strong></Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Footer>
                  <MdLocationOn />{product.city.name}
                </Card.Footer>
              </Card.Body>
              <Button onClick={rentProduct}>Confirmar Reserva</Button>
            </Card>
          </div>
        </div>
      </div>
      <h1 style={{ "marginTop": "35px", "textAlign": "center" }}>Selecione sua data de reserva</h1>
      <div className="calendar-availability-block" style={{ 'marginBottom': '15px' }}>
        <DateRangePicker className="calendar-style" />
      </div>
      <h1 style={{ "marginTop": "35px", "textAlign": "center" }}>Seu horário de chegada</h1>
      <div className="use-bootstrap" id="hour-appointment">
        <Card className="mb-5 m-3 w-50" style={{ 'border': 'solid 1px #D3D3D3' }}>
          <Card.Header>Indique sua hora prevista de chegada</Card.Header>
          <Card.Body>
            <Card.Title> <IoIosCheckmarkCircle /> Seu Carro estará pronto para check-in entre 10h00 e 23h00</Card.Title>
            <Form.Group className="mb-3">
              <Form.Control
                type="time"
                value={time}
                required
                step="900"
                min="10:00"
                max="23:00"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                className="w-50"
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </div>
      <div className="product-agreement">
        <MdSecurity style={{ 'fontSize': '25px' }} />
        <div className="unit-agreement">
          <h1 className="title">Normas</h1>
          <p className="description-agreement">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="unit-agreement">
          <h1 className="title">Segurança</h1>
          <p className="description-agreement">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="unit-agreement">
          <h1 className="title">Cancelamento</h1>
          <p className="description-agreement">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}