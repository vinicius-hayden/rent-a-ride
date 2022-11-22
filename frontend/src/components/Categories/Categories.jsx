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
    fetch("http://ec2-54-153-58-52.us-west-1.compute.amazonaws.com:9000/categories", requestConfigurationGet)
      .then((response) => response.json())
      .then((categoriesJSON) => setCategories(categoriesJSON));
  }, []);

  return (
    <div className="use-bootstrap">
      <CardGroup style={{'justify-content': 'center'}}>
        {categories.map((category, index) => (
          <Link to={`/categories/${category.id}/products`} index={index} style={{ textDecoration: 'none' }}>
          <div className="categories-res">
            <Card key={index} className="m-3" style={{  height: '18rem','width': '18rem', 'border-radius': '15px', 'border': 'solid 1px #D3D3D3' }}>
              <Card.Img variant="top" src={category.url} style={{ 'height': '75%', 'border-radius': '15px 15px 0px 0px' }} />
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
