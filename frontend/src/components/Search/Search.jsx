import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.scss";

export default function Search() {
  const [city, setCity] = useState(['', '']);
  const url = 'http://localhost:9000/products'
  
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },    
  };

  useEffect(() => {
    fetch("http://localhost:9000/cities", config)
      .then((response) => response.json())
      .then((citiesJSON) => setCity(citiesJSON));
  }, []);

  function submitForm(event) {
    event.preventDefault();
    const { city, dateRange } = event.target.elements;
    console.log("City: " + city?.value, "Date: " + dateRange?.value);
  }

  function findProducts() {
    let element = document.querySelector('.input-city');
    let pickUpDate = document.getElementById("pickUpDate").value;
    let dropOffDate = document.getElementById("dropOffDate").value;
    
    var selectedOption = element.value
    var idFromSelectedCity = null;
    city.forEach((city) => {
      if (city.name ===  selectedOption) { 
        idFromSelectedCity = city.id;
      }
    })

    console.log(`==>>${pickUpDate}<<==`);
    console.log("dropOffDate", dropOffDate);
    console.log("selectedOption", selectedOption);
    console.log("idFromSelectedCity", idFromSelectedCity);

    if (idFromSelectedCity > 0) {
      if (pickUpDate == '' && dropOffDate == '') {
        window.location.replace(`/cities/${idFromSelectedCity}/products`);
        console.log(`1`);
      } else {
        console.log(`2`);
        window.location.replace(`/cities/${idFromSelectedCity}/products/dateRange/${pickUpDate}/${dropOffDate}`);
      }
      window.location.replace(`/cities/${idFromSelectedCity}/products`);
    } else {
      window.location.replace(`/products/dateRange/${pickUpDate}/${dropOffDate}`);
    }
  }

  return (
    <>
        <div className="form-search">
          <form
            onSubmit={(event) => submitForm(event)}
            className="input-search"
          >
            <h1>Buscar por ofertas de carros para alugar</h1>

            <select className="input-city" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>
                Onde quer retirar seu carro?
              </option>
              
              {city.map((city, index) => (  
                <option value={city.name} key={index}>{city.name}</option>
              ))}
            </select>

            <input
              type="date"
              className="input-date"
              placeholder="Data de retirada"
              id="pickUpDate"
            />

            <input
              type="date"
              className="input-date"
              placeholder="Data de devolução"
              id="dropOffDate"
            />

            <input className="button-search" type="submit" value="Buscar" onClick={findProducts}/>
          </form>
        </div>
    </>
  );
}
