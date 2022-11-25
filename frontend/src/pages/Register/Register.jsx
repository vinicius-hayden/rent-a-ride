import HeaderRegister from "../../components/Header/HeaderRegister";
import Footer from "../../components/Footer/Footer";

import { useState } from "react";
import { Link } from "react-router-dom";

import "./Register.scss";

export default function Register() {
  const [formRegister, setFormRegister] = useState({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    passwordconfirm: null,
  });

  function submitForm(event) {
    event.preventDefault();

    const { firstname, lastname, email, password, passwordconfirm } =
      event.target.elements;

    console.log("Registro:", formRegister);
    
    setFormRegister({
      firstname: firstname?.value,
      lastname: lastname?.value,
      email: email?.value,
      password: password?.value,
      passwordconfirm: passwordconfirm?.value,
    });
  }

  return (
    <>
      <HeaderRegister />
      <div className="form-register">
        <form onSubmit={(event) => submitForm(event)}>
          <h1>Criar conta</h1>

          <div className="div-input-inline">
            <label>
              Nome
              <input
                type="text"
                className="input-firstname"
                autoComplete="firstname"
                required
              />
            </label>

            <label>
              Sobrenome
              <input
                type="text"
                className="input-lastname"
                autoComplete="lastname"
                required
              />
            </label>
          </div>

          <div className="div-input-block">
            <label>
              E-mail
              <input
                type="email"
                className="input-block"
                autoComplete="email"
                required
              />
            </label>

            <label>
              Senha
              <input
                type="password"
                className="input-block"
                autoComplete="password"
                required
              />
            </label>

            <label>
              Confirmar senha
              <input
                type="password"
                className="input-block"
                autoComplete="passwordconfirm"
                required
              />
            </label>
          </div>

          <div className="div-button-register">
            <input
              type="submit"
              className="button-register"
              value="Criar conta"
            />
          </div>

          <div className="message-register">
            Já tem uma conta? <Link to="/login">Iniciar sessão</Link>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
