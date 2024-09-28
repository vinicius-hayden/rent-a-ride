import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import { DateRange } from 'react-date-range';

import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import { BiArrowBack } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

import "./ProductRental.scss";
import axios from "axios";
import { icon } from "@fortawesome/fontawesome-svg-core";
const apiUrl = import.meta.env.VITE_RENT_RIDE_API_URL;

export default function ProductRental() {
  const { idProduct } = useParams();
  const [time, setTime] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: { name: "" },
    city: { name: "" },
    features: [],
    images: [{ url: "" }],
  });
  const navigate = useNavigate();
  const [city, setCity] = useState([]);
  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch(
      `${apiUrl}/products/${idProduct}`,
      requestConfigurationGet
    )
      .then((response) => response.json())
      .then((productsJSON) => setProduct(productsJSON));
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/cities`, requestConfigurationGet)
      .then((response) => response.json())
      .then((citiesJSON) => setCity(citiesJSON));
  }, []);

  function bookProduct() {
    let pickUpDate = document.getElementById("pickUpDate").value;
    let dropOffDate = document.getElementById("dropOffDate").value;
    let time = document.getElementById("pickUpTime").value;

    const url = `${apiUrl}/bookings/`;
    const customerId = localStorage.getItem('customerId');
    const pickUpDateTime = `${pickUpDate}T${time}:00.000+00:00`;
    const dropOffDateTime = `${dropOffDate}T${time}:00.000+00:00`;

    var postData = {
      pickupDate: `${pickUpDateTime}`,
      dropoffDate: `${dropOffDateTime}`,
      product: {
        id: idProduct
      },
      customer: {
        id: customerId
      }
    }

    let axiosConfig = {
      headers: {
        Accept: "*/*, application/json, text/plain ",
        "Content-Type": "application/json",
      },
    };

    axios.post(url, postData, axiosConfig)
      .then((response) => {
        Swal.fire({
          title: "Uhuuul!",
          text: "Sua reserva foi feita!",
          icon: "success",
          button: {
            text: "Voltar para a Home",
          },
        })
      })
      // .then(() => goToHome())
      ,
      (error) => {
        Swal.fire({
          title: "Tente novamente",
          text: "Favor revisar parametros",
          icon: "error"
        })
      }
      ;
  }

  const goToHome = () => {
    setTimeout(function () {
      window.location.href = "/";
    }, 500);
  };


  if (localStorage.getItem('jwt')) {
    return (
      <>
        <Header />
        <h1 style={{ marginTop: "125px", textAlign: "center" }}>
          Complete seus dados
        </h1>
        <div className="use-bootstrap">
          <div className="d-flex justify-content-center mt-5" id="card-product">
            <Card.Body className="m-3">
              <Form className="mt-5 m-3">
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" disabled placeholder={localStorage.getItem('nome')} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control type="text" disabled placeholder={localStorage.getItem('sobrenome')} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    disabled
                    placeholder={localStorage.getItem('email')}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Select id="disabledSelect">
                    <option value="cities" disabled selected>
                      Selecione sua Cidade
                    </option>
                    {city.map((city, index) => (
                      <option value={city.name} key={index}>
                        {city.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Form>
            </Card.Body>
            <div className="product-detail">
              <h3> Detalhes do produto </h3>
              <Card style={{ width: "15rem" }}>
                <Card.Subtitle>
                  {product.category.name} - {product.category.description}
                </Card.Subtitle>
                <Card.Img variant="top" src={product.images[0].url} />
                <Card.Body>
                  <Card.Title>
                    <strong>{product.name}</strong>
                  </Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Footer>
                    <MdLocationOn />
                    {product.city.name}
                  </Card.Footer>
                </Card.Body>
                <Button onClick={bookProduct}>Confirmar Reserva</Button>
              </Card>
            </div>
          </div>
        </div>
        <h1 style={{ marginTop: "35px", textAlign: "center" }}>
          Selecione sua data de reserva
        </h1>
        <div className="calendar-availability-block" style={{ marginBottom: "15px" }}>



          <input
            type="date"
            className="input-date"
            placeholder="Data de retirada"
            id="pickUpDate"
          />

          <input
            type="date"
            className="input-date"
            placeholder="Data de devolução"
            id="dropOffDate"
          />


        </div>
        <h1 style={{ marginTop: "35px", textAlign: "center" }}>
          Seu horário de chegada
        </h1>
        <div className="use-bootstrap" id="hour-appointment">
          <Card className="mb-5 m-3 w-50" style={{ border: "solid 1px #D3D3D3" }}>
            <Card.Header>Indique sua hora prevista de chegada</Card.Header>
            <Card.Body>
              <Card.Title>
                {" "}
                <IoIosCheckmarkCircle /> Seu Carro estará pronto para pick-up
                entre 10h00 e 23h00
              </Card.Title>
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
                  id="pickUpTime"
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </div>
        <div className="product-agreement">
          <MdSecurity style={{ fontSize: "25px" }} />
          <div className="unit-agreement">
            <h1 className="title">Normas</h1>
            <p className="description-agreement">
              O aluguel dos carros é feito diretamente pela EmpresCar LTDA.
            </p>
          </div>
          <div className="unit-agreement">
            <h1 className="title">Segurança</h1>
            <p className="description-agreement">
              Para sua segurança, apenas disponibilizaremos os serviços prestados para aqueles com credencias e CNH válidos até a data de assinatura de serviço.
            </p>
          </div>
          <div className="unit-agreement">
            <h1 className="title">Cancelamento</h1>
            <p className="description-agreement">
              A EmpresCar possui uma política de cancelamento restrita aqueles que assinam o serviço dentro do prazo de 5 dias úteis anterior à data do Pick-Up. Favor Consultar nossa equipe para quaisquer dúvidas mediantes pagamentos e/ou questões financeiras.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    Swal.fire({
      text: "Oopss...",
      title: "Você precisa estar logado para fazer uma reserva",
      icon: "error",
      button: {
        text: "Fazer Login",
      },
    })
      .then(() => goToHome());
  }
}
