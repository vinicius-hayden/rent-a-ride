import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HeaderAdmin from "../../components/Header/HeaderAdmin"
import Footer from "../../components/Footer/Footer"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Admin.scss";
import { useState, useEffect } from 'react';
import { FormLabel } from 'react-bootstrap';
import Swal from 'sweetalert2'

export default function Admin() {
  const [city, setCity] = useState(['', '']);
  const [category, setCategory] = useState([]);

  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch("http://localhost:9000/categories", config)
      .then((response) => response.json())
      .then((categoriesJSON) => setCategory(categoriesJSON));
  }, []);


  useEffect(() => {
    fetch("http://localhost:9000/cities", config)
      .then((response) => response.json())
      .then((citiesJSON) => setCity(citiesJSON));
  }, []);

  function createProduct() {
    Swal.fire({
      title: 'Produto Criado',
      icon: 'success'
    })
  }


  return (
    <>
      <HeaderAdmin />
      <div className="admin-title">
        <h1>Criar Produto</h1>
        <div className="left">
          <Link to={"/"}>
            <BiArrowBack size={40} color="#FBC02D" className="arrowback" />
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="forms">
          <div className="use-bootstrap">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome do Carro</Form.Label>
                <Form.Control type="email" placeholder="Digite o nome do Carro" id='forms-input' />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>País</Form.Label>
                <Form.Select defaultValue={'DEFAULT'} id='forms-input'>
                  <option value={'DEFAULT'} disabled>Escolha o País</option>
                  <option value="1">Brasil</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição do Produto</Form.Label>
                <Form.Control as="textarea" id='forms-input-text' />
              </Form.Group>
              <FormLabel>Adicionar Atributos</FormLabel>
                <Form.Check label={'Ar-Condicionado'} />
                <Form.Check label={'Direção Hidráulica'} />
                <Form.Check label={'Vidro Elétrico'} />
                <Form.Check label={'Trava Elétrica'} />
                <Form.Check label={'Air-Bag'} />
                <Form.Check label={'Alarme'} />
                <Form.Check label={'Som'} />
                <Form.Check label={'Sensor de Ré'} />
                <Form.Check label={'Câmera de Ré'} />
                <Form.Check label={'Blindado'} />
              <Button variant="primary" type="submit" className='mb-5 mt-5' onClick={createProduct}>
                Criar Produto
              </Button>
            </Form>
          </div>
          <div className='use-bootstrap'>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Select defaultValue={'DEFAULT'} id='forms-input'>
                  <option value={'DEFAULT'} disabled>Escolha a Categoria</option>
                  {category.map((category, index) => (
                    <option value={category.description} key={index}>{category.name} - {category.description}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cidade</Form.Label>
                <Form.Select defaultValue={'DEFAULT'} id='forms-input'>
                  <option value={'DEFAULT'} disabled>Escolha a Cidade</option>
                  {city.map((city, index) => (
                    <option value={city.name} key={index}>{city.name}</option>
                  ))}
                </Form.Select>
                <Form.Group controlId="formFileSm" className="mb-3 mt-3">
                  <Form.Label>Selecione a Imagem do Produto</Form.Label>
                  <Form.Control type="file" size="sm" id='forms-input' />
                </Form.Group>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  )
}