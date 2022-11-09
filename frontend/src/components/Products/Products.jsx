import "./Products.css";

import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch("http://localhost:9000/products", requestConfigurationGet)
      .then((response) => response.json())
      .then((productsJSON) => setProducts(productsJSON));
  }, []);

  return (
    <>
      <div className="div-products">
        <h2 className="div-title">Recomendações</h2>

        {products.map((product, index) => (
          <div className="products" key={index}>
            <div className="products-card">
              <div className="div-products-image">
                <img className="products-image" src={product.img} />
              </div>

              <div className="div-products-information">
                <h2> {product.title} </h2>
                <h3> {product.category} </h3>
                <p> {product.city} </p>
                <p> {product.description} </p>
                <Link to={`/products/${products.id}`}>
                  <button className="products-button">Ver detalhes</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
