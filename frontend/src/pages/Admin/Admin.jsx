import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import HeaderAdmin from "../../components/Header/HeaderAdmin"
import Footer from "../../components/Footer/Footer"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Admin.scss";
import { useState, useEffect } from 'react';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { icon } from '@fortawesome/fontawesome-svg-core';

export default function Admin() {
  const [cities, setCities] = useState([]);
  const [category, setCategory] = useState([]);
  const [car, setCar] = useState("");
  const [carError, setCarError] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [country, setCountry] = useState("");
  const [contryError, setCountryError] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [cityError, setCityError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState("");
  const [features, setFeatures] = useState([]);
  const [featuresError, setFeaturesErrror] = useState("");

  const handleCarChange = (e) => {
    setCar(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setCategoryInput(e.target.value);
    console.log(categoryInput);
  }

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
    fetch("http://localhost:9000/features", config)
      .then((response) => response.json())
      .then((featuresJSON) => { const features = featuresJSON.map(feat => ({ 
        ...feat, checked: false }));
        setFeatures(features);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9000/cities", config)
      .then((response) => response.json())
      .then((citiesJSON) => setCities(citiesJSON));
  }, []);

  const handleFeatureChange = (position) => {
    const updatedCheckedState = features.map((item, index) => {
      // index === position ? !item : item;
        if (index === position) {
          return { ...item, checked: !item.checked }
        } else {
          return item
        }
      }
    );

    setFeatures(updatedCheckedState);
    console.log(updatedCheckedState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkedFeatures = features.filter(obj => obj.checked === true).map((obj) => ({id: obj.id}));

    
    const postData = {
      features: checkedFeatures,
      name: 'name of the car',
      image: 'image of a car',
    }

    console.log(postData);

    Swal.fire({
      title: 'Produto criado',
      icon: 'success',
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
                <Form.Control type="name" placeholder="Digite o nome do Carro" id='forms-input' />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>País</Form.Label>
                <Form.Select defaultValue={'DEFAULT'} id='forms-input' required>
                  <option value={'DEFAULT'} disabled>Escolha o País</option>
                  <option value="1">Brasil</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descrição do Produto</Form.Label>
                <Form.Control as="textarea" id='forms-input-text' />
              </Form.Group>
              <FormLabel>Adicionar Atributos</FormLabel>
              {features.map((feature, index) => {
                return <Form.Check label={feature.name} value={feature.id} key={index} onChange={() => handleFeatureChange(index)} />
              })}
              <Button variant="primary" type="submit" className='mb-5 mt-5' onClick={handleSubmit}>
                Criar Produto
              </Button>
            </Form>
          </div>
          <div className='use-bootstrap'>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Select defaultValue={'DEFAULT'} id='forms-input' required onChange={handleCategoryChange}>
                  <option value={'DEFAULT'} disabled>Escolha a Categoria</option>
                  {category.map((category, index) => (
                    <option value={category.id} key={index}>{category.name} - {category.description}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cidade</Form.Label>
                <Form.Select defaultValue={'DEFAULT'} id='forms-input' required>
                  <option value={'DEFAULT'} disabled>Escolha a Cidade</option>
                  {cities.map((city, index) => (
                    <option value={city.name} key={index}>{city.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" id='forms-input'>
                <Form.Label>Inserir Url da Imagem</Form.Label>
                <Form.Control type="text" placeholder="Link completo da imagem" />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}