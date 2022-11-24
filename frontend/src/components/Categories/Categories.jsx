import "./Categories.css";
import { useEffect, useState } from "react";
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
    <>
      <div className="div-main">
        <h2 className="div-title">Buscar por categorias</h2>
        {categories.map((category, index) => (
        <Link to={`/categories/${category.id}/products`} index={index}>
          <div className="categories" key={index}>
            <div className="categories-card">
              <img className="categories-image" src={category.url} />
              <h2> {category.name} </h2>
              <p> {category.description} </p>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </>
  );
}
