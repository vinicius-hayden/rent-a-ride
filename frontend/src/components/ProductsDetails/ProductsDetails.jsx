import "./ProductsDetails.css";
import 'react-calendar/dist/Calendar.css';
import 'react-image-gallery/styles/css/image-gallery.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Calendar from 'react-calendar';

import ImageGallery from 'react-image-gallery';

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { MdSecurity } from "react-icons/md";

export default function ProductsDetails() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({ name: "", description: "", category: { name: '' }, city: { name: '' }, features: [] });
  const [value, onChange] = useState(new Date());
  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  const images = [
    {
      original: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
      thumbnail: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
      originalHeight: 315,
      originalWidth: 215
    },
    {
      original: "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80jpeg",
      thumbnail: "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80jpeg",
      originalHeight: 315,
      originalWidth: 215
    },

    {
      original: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      thumbnail: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      originalHeight: 315,
      originalWidth: 215
    },
  ];

  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });

  function redirectToRentalPage(productId) {
    console.log(productId);
    window.location.replace(`/products/${productId}/rental`);
  }

  library.add(fas);

  useEffect(() => {
    fetch(`http://localhost:9000/products/${idProduct}`, requestConfigurationGet)
      .then((response) => response.json())
      .then((productsJSON) => setProduct(productsJSON));
  }, []);

  return (
    <>
      <Header />
      <div className="header-products">
        <div className="header-products-left">
          <p>{product.category.description} - {product.category.name}</p>
          <h1 style={{'font-family': 'Poppins'}}>{product.name}</h1>
        </div>
        <div className="header-products-right">
          <Link to={"/"}>
            <BiArrowBack size="40" color="#FBC02D" />
          </Link>
        </div>
      </div>
      <div className="header-products-location">
        <h3>
          <MdLocationOn size="20" color="#263238" /> {product.city.name}
        </h3>
        <div className="header-products-location-right">
          <h3>Rating - {product.category.rating} <FontAwesomeIcon icon={['fas', 'star']} /> </h3>
        </div>
      </div>
      <div className="images">
        <h1> Bloco das Imagens</h1>
        <ImageGallery items={images}/>
      </div>
      <div className="description">
        <h1>Título da descrição</h1>
        <p>{product.description}</p>
      </div>
      <div className="features">
        <h1>Características</h1>
        {product.features.map((feature, index) => {
          return (
            <div className="feature-information">
              <FontAwesomeIcon icon={['fas', `${feature.icon}`]} key={index}></FontAwesomeIcon>
              <p>{feature.name}</p>
            </div>)
        })}
      </div>

      <div className="calendar-availability-block">
        <Calendar onChange={onChange} value={value} />
      </div>

      <div className="rent-button-block">
        <button type="button" className="rent-button-block-button" value="Reservar" onClick={() => redirectToRentalPage(product.id)}>Iniciar Reserva</button>
      </div>

      <div className="product-agreement">
        <MdSecurity style={{ 'font-size': '25px' }} />
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
  );
}