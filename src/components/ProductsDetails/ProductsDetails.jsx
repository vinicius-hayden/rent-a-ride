import "./ProductsDetails.scss";
import 'react-calendar/dist/Calendar.css';
import 'react-image-gallery/styles/scss/image-gallery.scss'
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
  const [product, setProduct] = useState({ name: "", description: "", category: { name: '' }, city: { name: '' }, features: [], images: [{url : ""}] });
  const [value, onChange] = useState(new Date());
  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  const images = [
    {
      original: `${product.images[0].url}`,
      thumbnail: `${product.images[0].url}`,
      originalHeight: 415,
      originalWidth: 215
    },
  ];

  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });

  function redirectToRentalPage(productId) {
    window.location.replace(`/products/${productId}/rental`);
  }

  library.add(fas);

  useEffect(() => {
    fetch(`http://ec2-54-153-58-52.us-west-1.compute.amazonaws.com:9000/products/${idProduct}`, requestConfigurationGet)
      .then((response) => response.json())
      .then((productsJSON) => setProduct(productsJSON));
  }, []);

  return (
    <>
      <Header />
      <div className="header-products">
        <div className="header-products-left">
          <p>{product.category.description} - {product.category.name}</p>
          <h1 style={{'fontFamily': 'Poppins'}}>{product.name}</h1>
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
        <ImageGallery items={images}/>
      </div>
      <div className="description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
      <div className="features">
        <h3>Características</h3>
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