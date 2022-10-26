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

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorCredential, setErrorCredential] = useState(false);

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

    if (email === "") {
      setErrorEmail(true);
      errorMessageNull(true);
    } else if (password === "") {
      setErrorPassword(true);
      errorMessageNull(true);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail(true);
      errorMessageEmail(true);
    } else if (password.length < 6) {
      setErrorPassword(true);
      errorMessagePassword(true);
    } else if (email !== userTest.email) {
      setErrorCredential(true);
      errorMessageUserTestEmail(true);
    } else if (password !== userTest.password) {
      setErrorCredential(true);
      errorMessageUserTestPassword(true);
    } else if (email === userTest.email && password === userTest.password) {
      setSubmitted(true);
      setError(false);
      successMessage(true);
      goToUserPage(true);
    } else {
      setError(true);
    }
  };

  const goToUserPage = () => {
    // return (window.location.href = "/userpage");
    // dois segundos para redirecionamento
    setTimeout(function () {
      window.location.href = "/userpage";
    }, 2000);
  };

  const successMessage = () => {
    return (
      alert("Usuário logado! Seja bem-vindo(a)!"),
      console.log("Email: " + email + " Password: " + password)
    );
  };

  const errorMessageNull = () => {
    return (
      alert("Por favor, preencha todos os campos!"),
      console.log("Por favor, preencha todos os campos!")
    );
  };

  const errorMessageEmail = () => {
    return (
      alert("Insira um e-mail válido."), console.log("Insira um e-mail válido.")
    );
  };

  const errorMessagePassword = () => {
    return (
      alert("Insira uma senha válida com mais de 6 caracteres."),
      console.log("Insira uma senha válida com mais de 6 caracteres.")
    );
  };

  const errorMessageUserTestEmail = () => {
    return (
      alert(
        "Por favor, tente novamente, suas credenciais são inválidas. Esse e-mail ainda não está cadastrado."
      ),
      console.log(
        "Por favor, tente novamente, suas credenciais são inválidas. Esse e-mail ainda não está cadastrado."
      )
    );
  };

  const errorMessageUserTestPassword = () => {
    return (
      alert(
        "Por favor, tente novamente, suas credenciais são inválidas. A senha inserida é inválida."
      ),
      console.log(
        "Por favor, tente novamente, suas credenciais são inválidas. A senha inserida é inválida."
      )
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
              required
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
              required
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
              id="button-login"
            >
              Iniciar sessão
            </button>
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
