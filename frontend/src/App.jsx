import { Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import UserPage from "./pages/UserPage/UserPage";
// import Products from "./components/Products/Products";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage" element={<UserPage />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products/:idProduct" element={<ProductsDetails />} /> 
      </Routes>
    </div>
  );
}

export default App;
