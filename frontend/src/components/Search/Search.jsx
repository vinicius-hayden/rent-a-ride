import React, { useState } from "react";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState([null, null]);

  function submitForm(event) {
    event.preventDefault();
    const { city, dateRange } = event.target.elements;
    console.log("City: " + city?.value, "Date: " + dateRange?.value);
  }

  return (
    <>
      <div className="form-search">
        <form onSubmit={(event) => submitForm(event)} className="input-search">
          <h1>Buscar por ofertas de carros para alugar</h1>

          <select className="input-city">
            <option value="cities" disabled selected>
              Onde quer retirar seu carro?
            </option>
            <option value="São Paulo">São Paulo</option>
            <option value="Diadema">Diadema</option>
            <option value="Lauro de Freitas">Lauro de Freitas</option>
            <option value="Salvador">Salvador</option>
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

          <input className="button-search" type="submit" value="Buscar" />
        </form>
      </div>
    </>
  );
}
