import "./ProductsDetails.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

export default function ProductsDetails() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({ name: "", description: "", category: { name: '' }, city: { name: '' }, features: [] });
  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  library.add(fas);

  useEffect(() => {
    fetch(`http://localhost:9000/products/${idProduct}`, requestConfigurationGet)
      .then((response) => response.json())
      .then((productsJSON) => setProduct(productsJSON));
  }, []);


  let testing = {
    id: 1,
    name: "Hyundai HB20",
    description: "Aceleração de 0 a 100 km/h: 9,3 - 14,5 segundos/ Volume de carga: 300 - 475 l/ Tração: Tração dianteira/ Portas: 4, 5",
    features: [
      {
        id: 1,
        name: "Ar-Condicionado",
        icon: "faSnowflake"
      },
      {
        id: 3,
        name: "Vidro Elétrico",
        icon: "faCar"
      },
      {
        id: 5,
        name: "AirBag",
        icon: "faCarOn"
      },
      {
        id: 7,
        name: "Som",
        icon: "faMusic"
      },
      {
        id: 4,
        name: "Trava Elétrica",
        icon: "FaLock"
      },
      {
        id: 2,
        name: "Direção Hidráulica",
        icon: "faGear"
      }
    ]
  } 
 
  return (
    <>
      <Header />
      <div className="header-products">
        <div className="header-products-left">
          <p>{product.category.name}</p>
          <h1>{product.name}</h1>
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
          <h3>Rating</h3>
        </div>
      </div>
      <div className="images">
        <h1> Bloco das Imagens</h1>
      </div>
      <div className="description">
        <h1>Título da descrição</h1>
        <p>{product.description}</p>

      </div>
      
      <div className="features">
        
        {product.features.map((feature, index) => {
          return (<>
          
          <FontAwesomeIcon icon={['fas', `${feature.icon}`]} key={index}></FontAwesomeIcon>

          <h3>{feature.name}</h3>
          </>)
        })}

      </div>

      <Footer />
    </>
  );
}
