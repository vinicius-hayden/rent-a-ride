import "./Products.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';

import { CardGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
const apiUrl = import.meta.env.VITE_RENT_RIDE_API_URL;

export default function Products() {
  const [products, setProducts] = useState([]);

  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch(`${apiUrl}/products`, requestConfigurationGet)
      .then((response) => response.json())
      .then((productsJSON) => setProducts(productsJSON));
  }, []);

  return (
    <>
      <h2 className="div-title">Recomendações</h2>
      <div className="use-bootstrap">
        <CardGroup style={{ 'justifyContent': 'center' }}>
          {products.map((product, index) => (
            <div className="products-res" key={index}>
              <Card key={index} className="m-3" style={{ 'borderRadius': '5px', 'border': 'solid 1px #D3D3D3' }} id="product-card-bootstrap">
                <Card.Img variant="top" src={product.images[0].url} style={{ 'height': '125px', 'borderRadius': '5px 5px 0px 0px' }} />
                <Card.Body id="card-product-body">
                  <Card.Title id="card-product-body-title">{product.name}</Card.Title>
                  <Card.Text id="card-product-body-text">{product.description}</Card.Text>
                  <Link to={`/products/${product.id}`}>
                    <Button color="267d26" id="card-product-button"> Ver mais detalhes</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
        <div className="u-footer"></div>
      </div>
    </>
  );
}
