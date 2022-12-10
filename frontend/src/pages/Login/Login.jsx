import HeaderLogin from "../../components/Header/HeaderLogin";
import Footer from "../../components/Footer/Footer";
import Swal from 'sweetalert2'
import { useState } from "react";
import { Link } from "react-router-dom";

import jwt from "jwt-decode"

import "./Login.scss";
import axios from 'axios';
import { useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const url = 'http://localhost:9000/auth'
  var postData =  {
    username: `${email}`,
    password: `${password}`
  }

  let axiosConfig = {
    headers: {
      Accept: "*/*, application/json, text/plain ",
      "Content-Type": "application/json",
    },
  };

  const handleEmailChange = (e) => {
    setSuccessMsg('');
    setEmailError('');
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setSuccessMsg('');
    setPasswordError('');
    setPassword(e.target.value);
  }

  
  function isValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
      )
    ;
  }

  function isValidPassword(password) {
    if(password.size > 8) {
      return false;
    }
    if(password == '' || password == null) {
      return false
    }
    return true
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail(email) && isValidPassword(password)) {
      axios.post(url, postData, axiosConfig)
        .then((response) => {
          console.log(response);
          Swal.fire({
            title: 'Login feito',
            text: "Seja bem vindo :)",
            icon: "success",
          })
          .then(() => {
            const token = response.data.jwt;
            localStorage.setItem('jwt', token)
            const {sub, name, lastName, customerId, role} = jwt(token);
            localStorage.setItem('email', sub);
            localStorage.setItem('nome', name);
            localStorage.setItem('sobrenome', lastName);
            localStorage.setItem('customerId', customerId);
            localStorage.setItem('role', role);
          })
          .then(() => goToUserPage())
          console.log();
        }, (error) => {
          console.log(error)
          Swal.fire({
            title: `Tente novamente...`,
            text: "Dados invádios",
            icon: "error",
          })
        })
      ;

    } else {
      if (!isValidPassword(password)) {
        setPasswordError("Favor, inserir senha válida")
      }
  
      if (!isValidEmail(email)) {
        setEmailError("Favor, inserir email válido");
      }   
    }
  }

  const goToUserPage = () => {
    setTimeout(function () {
      window.location.href = "/";
    }, 2000);
  };



  const [openPassword, setOpenPassword] = useState(false);

  const showPassword = (e) => {
    e.preventDefault()
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
              onChange={handleEmailChange}
              required
            />
          </label>
          {emailError&&<div className="error-msg"><p> {emailError} </p></div>}
          <label htmlFor="password">
            Senha
            <input
              type={openPassword ? "text" : "password"}
              className="input-form-password"
              autoComplete="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              className="button-form-password"
              onMouseEnter={() => showPassword(true)}
              onMouseLeave={() => showPassword(false)}
              onClick={showPassword}
            />
          </label>

          {passwordError&&<div className="error-msg"><p> {passwordError} </p></div>}

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
