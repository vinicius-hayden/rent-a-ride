import "./Products.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';

import { CardGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Products() {
  const [products, setProducts] = useState([]);

  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch("http://ec2-54-153-58-52.us-west-1.compute.amazonaws.com:9000/products", requestConfigurationGet)
      .then((response) => response.json())
      .then((productsJSON) => setProducts(productsJSON));
  }, []);

  return (
    <>
      <h2 className="div-title">Recomendações</h2>
      <CardGroup style={{ 'justify-content': 'center' }} className='use-bootstrap'>
        {products.map((product, index) => (
          <Card key={index} className="m-3" style={{ height: '18rem', 'width': '18rem', 'borderRadius': '18px', 'border': 'solid 1px #D3D3D3' }}>
            <Card.Img variant="top" src={product.category.url} style={{ 'height': '105px', 'borderRadius': '15px 15px 0px 0px' }} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </>
  );
}
