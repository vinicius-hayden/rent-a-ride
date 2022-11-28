import React, { useState, useEffect } from "react";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(['', '']);

  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch("http://localhost:9000/cities", requestConfigurationGet)
      .then((response) => response.json())
      .then((citiesJSON) => setCity(citiesJSON));
  }, []);

  function submitForm(event) {
    event.preventDefault();
    const { city, dateRange } = event.target.elements;
    console.log("City: " + city?.value, "Date: " + dateRange?.value);
  }

  function findProductByCity() {
    let element = document.querySelector('.input-city');
    var selectedOption = element.value
    var idFromSelectedCity = null;
    city.forEach((city) => {
      if (city.name ===  selectedOption) { 
        idFromSelectedCity = city.id;
      }
    })

    if(idFromSelectedCity === null) { 
      window.alert("Por favor, coloque uma cidade");
    }
    else {
      window.location.replace(`/cities/${idFromSelectedCity}/products`);
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
            />

            <input
              type="date"
              className="input-date"
              placeholder="Data de devolução"
            />

            <input className="button-search" type="submit" value="Buscar" onClick={findProductByCity}/>
          </form>
        </div>
    </>
  );
}
