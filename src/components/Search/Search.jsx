import React, { useState, useEffect } from "react";
import "./Search.scss";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [city, setCity] = useState(['', '']);
  const url = 'http://ec2-54-153-58-52.us-west-1.compute.amazonaws.com:9000/products'
  const today     = moment().format('YYYY-MM-DD');
  const tomorrow  = moment().add(1,'days').format('YYYY-MM-DD')
  const navigate = useNavigate(); 
  // const yesterday = moment().add(-1, 'days');
  
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },    
  };

  useEffect(() => {
    fetch("http://ec2-54-153-58-52.us-west-1.compute.amazonaws.com:9000/cities", config)
      .then((response) => response.json())
      .then((citiesJSON) => setCity(citiesJSON));
  }, []);

  function submitForm(event) {
    event.preventDefault();
    const { city, dateRange } = event.target.elements;
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

    if (idFromSelectedCity > 0) {
      if (pickUpDate != '' && dropOffDate != '') {
        navigate(`/cities/${idFromSelectedCity}/products/dateRange/${pickUpDate}/${dropOffDate}`);
        return;
      }
      navigate(`/cities/${idFromSelectedCity}/products`);
    } else {
      if (pickUpDate == '' && dropOffDate == '') {
        window.alert('Por favor, inserir pelo menos cidade.')
        return;
      }
      navigate(`/products/dateRange/${pickUpDate}/${dropOffDate}`);
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
              // value={today}
              onChange={console.log(today)}
            />

            <input
              type="date"
              className="input-date"
              placeholder="Data de devolução"
              id="dropOffDate"
              // value={tomorrow}
            />

            <input className="button-search" type="submit" value="Buscar" onClick={findProducts}/>
          </form>
        </div>
    </>
  );
}
