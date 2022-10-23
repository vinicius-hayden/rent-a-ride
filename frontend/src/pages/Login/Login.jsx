import HeaderLogin from "../../components/Header/HeaderLogin";
import Footer from "../../components/Footer/Footer";

import { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const userTest = {
    email: "brunorocha@email.com",
    password: "bruno123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
      errorMessageNull(true);
    } else if (password.length < 6 || !/\S+@\S+\.\S+/.test(email)) {
      setError(true);
      errorMessageValidation(true);
    } else if (!userTest.email || !userTest.password) {
      setError(true);
      errorMessageUserTest(true);
    } else {
      setSubmitted(true);
      setError(false);
      successMessage(true);
    }
  };

  const successMessage = () => {
    return (
      console.log("Usuário logado!"),
      console.log("Email: " + email + " Password: " + password)
    );
  };

  const errorMessageNull = () => {
    return console.log("Por favor, preencha todos os campos!");
  };

  const errorMessageValidation = () => {
    return console.log(
      "Lembre-se: você precisa de um e-mail válido e uma senha com mais de 6 caracteres."
    );
  };

  const errorMessageUserTest = () => {
    return console.log(
      "Por favor, tente novamente, suas credenciais são inválidas."
    );
  };

  const [openPassword, setOpenPassword] = useState(false);

  const showPassword = () => {
    setOpenPassword(!openPassword);
  };

  return (
    <>
      <HeaderLogin />

      <div className="form-login">
        <form>
          <h1>Iniciar sessão</h1>
          <label htmlFor="email">
            E-mail
            <input
              type="email"
              className="input-form-email"
              autoComplete="email"
              value={email}
              onChange={handleEmail}
            />
          </label>

          <label htmlFor="password">
            Senha
            <input
              type={openPassword ? "text" : "password"}
              className="input-form-password"
              autoComplete="password"
              value={password}
              onChange={handlePassword}
            />
            <button
              className="button-form-password"
              onMouseEnter={() => showPassword(true)}
              onMouseLeave={() => showPassword(false)}
              onClick={showPassword}
            />
          </label>

          <div className="div-button-login">
              <button
                onClick={handleSubmit}
                className="button-login"
                type="submit"
                value="Entrar"
              >
                Iniciar sessão
              </button>

              {/* Teste - usuário logado*/}
              <Link to="/userpage">Link to userpage</Link>
          </div>

          <div className="message-login">
            Ainda não tem conta? <Link to="/register">Registre-se</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
