import "./Categories.scss";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { CardGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch("http://localhost:9000/categories", requestConfigurationGet)
      .then((response) => response.json())
      .then((categoriesJSON) => setCategories(categoriesJSON));
  }, []);

  return (
    <div className="use-bootstrap">
      <CardGroup style={{'justify-content': 'center'}} id="card-group-bootstrap">
        {categories.map((category, index) => (
          <Link to={`/categories/${category.id}/products`} index={index} style={{ textDecoration: 'none' }}>
          <div id="categories-res">
            <Card key={index} className="m-3" style={{'border-radius': '5px', 'border': 'solid 1px #D3D3D3' }} id="card-bootstrap-category">
              <Card.Img variant="top" src={category.url} style={{'border-radius': '5px 5px 0px 0px'}} id="card-bootstrap-category-image"/>
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          </Link>
        ))}
      </CardGroup>
    </div>
  );
}
