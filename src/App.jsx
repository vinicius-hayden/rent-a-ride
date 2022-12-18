import { Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import UserPage from "./pages/UserPage/UserPage";
// import Products from "./components/Products/Products";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import ProductCity from "./components/ProductCity/ProductCity";
import ProductRental from "./components/ProductRental/ProductRental";
import ProductDateRange from "./components/ProductDateRange/ProductDateRange";
import ProductCityDateRange from "./components/ProductCityDateRange/ProductCityDateRange";
import Admin from "./pages/Admin/Admin";
import UserBooking from "./components/UserBooking/UserBooking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products/:idProduct" element={<ProductsDetails />} /> 
        <Route path="/categories/:idCategory/products" element={<ProductCategory/>}/>
        <Route path="/cities/:idCity/products" element={<ProductCity/>} />
        <Route path="/bookings/" element={<UserBooking/>} />
        <Route path="/products/:idProduct/rental" element={<ProductRental/>} />
        <Route path="/products/dateRange/:pickupdate/:dropoffdate" element={<ProductDateRange/>} />
        <Route path="/cities/:idCity/products/dateRange/:pickupdate/:dropoffdate" element={<ProductCityDateRange/>} />
      </Routes>
    </div>
  );
}

export default App;
