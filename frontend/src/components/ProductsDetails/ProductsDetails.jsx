import "./ProductsDetails.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

export default function ProductsDetails() {
  const { idProduct } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/products/${idProduct}`)
      .then((response) => response.json())
      .then((productDetailJSON) => setProduct(productDetailJSON));
  }, []);

  return (
    <>
      <Header />

      <div className="header-products">
        <div className="header-products-left">
          <p>{product.category}</p>
          <h1>{product.title}</h1>
        </div>

        <div className="header-products-right">
          <Link to={"/"}>
            <BiArrowBack size="40" color="#FBC02D" />
          </Link>
        </div>
      </div>

      <div className="header-products-location">
        <h3>
          <MdLocationOn size="20" color="#263238" /> {product.city}
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

      <Footer />
    </>
  );
}
