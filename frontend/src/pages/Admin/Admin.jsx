import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HeaderAdmin from "../../components/Header/HeaderAdmin"
import Footer from "../../components/Footer/Footer"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Admin.scss";
import { useState, useEffect } from 'react';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { icon, text } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import Header from '../../components/Header/Header';

export default function Admin() {
  const [cities, setCities] = useState([]);
  const [category, setCategory] = useState([]);
  const [car, setCar] = useState("");
  const [carError, setCarError] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [cityError, setCityError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState("");
  const [features, setFeatures] = useState([]);
  const [featuresError, setFeaturesError] = useState("");

  const handleCarChange = (e) => {
    setCar(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setCategoryInput(e.target.value);
    console.log(categoryInput);
  }

  const handleCityChange = (e) => {
    setCityInput(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleImageChange = (e) => {
    setImage(e.target.value);
  }

  const handleCountryChange = (e) => {
    setCountry((e.target.value));
  }

  function isCarValid() {
    if (car !== "") {
      return true;
    }
    return false;
  }

  function isDescriptionValid() {
    if (description !== "") {
      return true;
    }
    return false;
  }

  function areFeaturesValid() {
    return features.map((feature) => feature.checked).reduce(
      (accumulator, currentValue) => accumulator || currentValue,
      false
    )
  }

  function isCategoryValid() {
    if(categoryInput != "") {
      return true;
    }
    return false;
  }

  function isCountryValid() {
    if(country != "") {
      return true;
    }
    return false;
  }
  
  function isCityValid() {
    if(cityInput != "") {
      return true;
    }
    return false;
  }

  function isImageValid() {
    return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(image);
  }

  const handleFeatureChange = (position) => {
    const updatedCheckedState = features.map((item, index) => {
      if (index === position) {
        return { ...item, checked: !item.checked }
      } else {
        return item
      }
    }
    );
    setFeatures(updatedCheckedState);
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
      .then((featuresJSON) => {
        const features = featuresJSON.map(feat => ({
          ...feat, checked: false
        }));
        setFeatures(features);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9000/cities", config)
      .then((response) => response.json())
      .then((citiesJSON) => setCities(citiesJSON));
  }, []);

  function handleChangeState() {
    const url = ''
    let sidebar = document.querySelector('.sidebar');

    if (sidebar.style.display == '') {
      sidebar.style.display = 'block';
    }
    else if (sidebar.style.display == 'block') {
      sidebar.style.display = '';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("EU FUI CHAMADO")
    const checkedFeatures = features.filter(obj => obj.checked === true).map((obj) => ({ id: obj.id }));
    const url = 'http://localhost:9000/products'
    const axiosConfig = {
      headers: {
        Accept: "*/*, application/json, text/plain ",
        "Content-Type": "application/json",
      },
    };
    const postData = {
      name: car,
      description: description,
      features: checkedFeatures,
      category: {
        id: categoryInput
      },
      city: {
        id: cityInput
      },
      images: [
        {
          title: car,
          url: image
        }
      ]
    }

    let hasError = false;
    if (!isCarValid()) {
      setCarError("Digite um nome válido");
      hasError = true;
    } else {
      setCarError("");
    }
    if (!isDescriptionValid()) {
      setDescriptionError("ERRO");
      hasError = true;
    } else {
      setDescriptionError("");
    }
    if (!areFeaturesValid()) {
      setFeaturesError("ERRO");
      hasError = true;
    } else {
      setFeaturesError("");
    }
    if (!isCategoryValid()) {
      setCategoryError("ERRO");
      hasError = true;
    } else {
      setCategoryError("");
    }
    if (!isImageValid()) {
      setImageError("ERRO");
      hasError = true;
    } else {
      setImageError("");
    }
    if (!isCountryValid()) {
      setCountryError("ERRO");
      hasError = true;
    } else {
      setCountryError("");
    }
    if (!isCityValid()) {
      setCityError("ERRO");
      hasError = true;
    } else {
      setCityError("");
    }

    if (!hasError) {
      axios.post(url, postData, axiosConfig)
        .then((response) => {
          console.log(response)
          Swal.fire({
            title: 'Produto criado com êxito',
            icon: 'success',
          })
            .then(() => document.location.reload())
        }, (error) => {
          console.log(error)
          Swal.fire({
            title: 'Não foi possível criar o produto',
            text: 'Tente novamente mais tarde',
            icon: 'success',
          })
        })
      ;
    }
  }

  //   if (isCarValid && isDescriptionValid && areFeaturesValid && isCategoryValid && isCityValid && isImageValid &isCountryValid) {
  //     axios.post(url, postData, axiosConfig)
  //       .then((response) => {
  //         console.log(response)
  //         Swal.fire({
  //           title: 'Produto criado com êxito',
  //           icon: 'success',
  //         })
  //           .then(() => document.location.reload())
  //       }, (error) => {
  //         console.log(error)
  //         Swal.fire({
  //           title: 'Não foi possível criar o produto',
  //           text: 'Tente novamente mais tarde',
  //           icon: 'success',
  //         })
  //       })
  //     ;
  //   } else {
  //     Swal.fire({
  //       title: `Dados inválidos!`,
  //       text: 'Favor, preencher os dados corretamente e preenchendo todos os campos com informações fidedignas',
  //       icon: 'error'
  //     })
  //       .then(() => {
  //         if(!isCarValid()) {
  //           setCarError("Dado inválido");
  //         }
  //       })
  //   }
  // }

  const goToHome = () => {
    setTimeout(function () {
      window.location.href = "/";
    }, 2000);
  };

  if (localStorage.getItem(('role')) == 'admin') {
    return (
      <>
        <Header/>
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
                  <Form.Control type="name" id='forms-input' onChange={handleCarChange} />
                  {carError && <div className='error-msg'>{carError}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>País</Form.Label>
                  <Form.Select defaultValue={'DEFAULT'} id='forms-input' required onChange={handleCountryChange}>
                    <option value={'DEFAULT'} disabled>Escolha o País</option>
                    <option value="1">Brasil</option>
                  </Form.Select>
                  {countryError && <div className='error-msg'>{countryError}</div>}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Descrição do Produto</Form.Label>
                  <Form.Control as="textarea" id='forms-input-text' onChange={handleDescriptionChange} />
                  {descriptionError && <div className='error-msg'>{descriptionError}</div>}
                </Form.Group>
                <FormLabel>Adicionar Atributos</FormLabel>
                {features.map((feature, index) => {
                  return <Form.Check label={feature.name} value={feature.id} key={index} onChange={() => handleFeatureChange(index)} />
                })}
                {featuresError && <div className='error-msg'>{featuresError}</div>}
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
                  {categoryError && <div className='error-msg'>{categoryError}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Select defaultValue={'DEFAULT'} id='forms-input' required onChange={handleCityChange}>
                    <option value={'DEFAULT'} disabled>Escolha a Cidade</option>
                    {cities.map((city, index) => (
                      <option value={city.id} key={index}>{city.name}</option>
                    ))}
                  </Form.Select>
                  {cityError && <div className='error-msg'>{cityError}</div>}
                </Form.Group>
                <Form.Group className="mb-3" id='forms-input'>
                  <Form.Label>Inserir Url da Imagem</Form.Label>
                  <Form.Control type="text"onChange={handleImageChange} />
                  {imageError && <div className='error-msg'>{imageError}</div>}
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )

  } else {
    return (
      <>
        <h1 style={{ 'fontFamily': 'Times New Roman', 'textAlign': 'center' }}> Você não tem permissão para acessar esse site.</h1>
        {window.onload = goToHome()}
      </>
    )
  }

}