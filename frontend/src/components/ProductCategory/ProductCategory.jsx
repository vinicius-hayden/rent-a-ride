import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import "./ProductCategory.css"


export default function ProductCategory() {
  const { idCategory } = useParams();
  const [products, setProducts] = useState([]);
  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch(`http://ec2-54-153-58-52.us-west-1.compute.amazonaws.com:9000/products/?categoryId=${idCategory}`, requestConfigurationGet)
      .then((response) => response.json())
      .then((productsJSON) => setProducts(productsJSON));
  }, []);

  return (
    <>
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      {products.map((product, index) => (
          <div className="products" key={index}>
            <div className="products-card">
              <div className="div-products-information">
                <h2> {product.name} </h2>
                <h3> {product.category.description} </h3>
                <p> {product.city.name} </p>
                {/* <p> {product.description} </p> */}
                <Link to={`/products/${product.id}`}>
                  <button className="products-button">Ver detalhes</button>
                </Link>
              </div>
            </div>
          </div>
        ))}

      <Footer />
    </>
  )

}