import HeaderRegister from "../../components/Header/HeaderRegister";
import Footer from "../../components/Footer/Footer";

import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import "./Register.scss";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [LastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState('');
  const [confirmPasswordError, setConfirmedPasswordError] = useState('');
  const url = 'http://ec2-54-153-58-52.us-west-1.compute.amazonaws.com:9000/customers/'
  var postData = {
    name: `${name}`,
    lastName: `${lastName}`,
    user : {
      email: `${email}`,
      password: `${password}`
    }
  }
  let axiosConfig = {
    headers: {
      Accept: "*/*, application/json, text/plain ",
      "Content-Type": "application/json",
    },
  };

  const handleNameChange = (e) => {
    setNameError('');
    setName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastNameError('');
    setLastName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmailError('');
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPasswordError('');
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmedPasswordError('');
    setConfirmedPassword(e.target.value);
  }

  function isEmailValid(email) {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email) 
    ) {
      setEmailError("Favor, inserir um email válido");
      return false;
    } else {
      setEmailError('');
      return true;
    }
  }

  function isPasswordValid(password) {
    if (password.size > 8) {
      setPasswordError('Favor, inserir senha menor que 8 letras')
      return false;
    }
    if (password == '' || password == null) {
      setPasswordError('Favor, inserir senha')
      return false
    }
    return true
  }

  function isNameValid(name) {
    if (name.trim() === "" || name == null) {
      setNameError('Favor, inserir nome')
      return false;
    }
    return true
  }

  function isLastNameValid(name) {
    if (name.trim() === "" || name == null) {
      setLastNameError('Favor, inserir sobrenome')
      return false;
    }
    return true
  }

  function isConfirmedPasswordValid(confirmPassword) {
    if (confirmPassword != password) {
      setConfirmedPasswordError("As senhas inseridas são diferentes");
      return false;
    }
    return true;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNameValid(name) && isLastNameValid(lastName) && isEmailValid(email) && isPasswordValid(password) && isConfirmedPasswordValid(confirmPassword)) {
      axios.post(url, postData, axiosConfig)
        .then((response) => {
          console.log(response);
          Swal.fire({
            title: "Registrado com sucesso!",
            text: "Seja bem vindo!",
            icon: "success",
            button: {
              text: "Fazer Login",
            },
          })
          .then(() => goToLoginPage())
          console.log();
        }), (error) => {
          console.log(error);
          Swal.fire({
            title: "Ooopss...",
            text: "Dados inválidos, favor tentar novamente",
            icon: "error"
          })
        }
    } else {
      if (!isNameValid(name)) {
        setNameError("Favor, inserir nome válido");
        console.log(emailError, ' <-------- Error');
      }
      if (!isLastNameValid(lastName)) {
        setLastNameError("Favor, inserir sobrenome válido");
      }
      if (!isEmailValid(email) || email.trim() === "" || email == null) {
        setEmailError("Favor, inserir email válido");
      }
      if (!isPasswordValid(password)) {
        setPasswordError("Favor, inserir senha válida");
      }
      if (!isConfirmedPasswordValid(confirmPassword)) {
        setConfirmedPasswordError("Senha acima não coincide");
      }
    }

  }

  const goToLoginPage = () => {
    setTimeout(function () {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <>
      <HeaderRegister />
      <div className="form-register">
        <form onSubmit={(event) => submitForm(event)}>
          <h1>Criar conta</h1>

          <div className="div-input-inline">
            <label>
              Nome
              <input type="text" className="input-firstname" autoComplete="firstname" required onChange={handleNameChange} />
              {nameError && <div className="error-msg"><p> {nameError} </p></div>}
            </label>
            <label>
              Sobrenome
              <input type="text" className="input-lastname" autoComplete="lastname" required onChange={handleLastNameChange}/>
            </label>
            {LastNameError && <div className="error-msg"><p> {LastNameError} </p></div>}
          </div>
          <div className="div-input-block">
            <label>
              E-mail
              <input type="email" className="input-block" autoComplete="email" required onChange={handleEmailChange}/>
            </label>
            {emailError && <div className="error-msg"><p> {emailError} </p></div>}
            <label>
              Senha <input type="password" className="input-block" autoComplete="password" required onChange={handlePasswordChange}/>
            </label>
            {passwordError && <div className="error-msg"><p> {passwordError} </p></div>}
            <label>
              Confirmar senha
              <input type="password" className="input-block" autoComplete="passwordconfirm" required onChange={handleConfirmPasswordChange}/>
            </label>
          </div>
          {confirmPasswordError && <div className="error-msg"><p> {confirmPasswordError} </p></div>}
          <div className="div-button-register">
            <input type="submit" className="button-register" value="Criar conta" onClick={handleSubmit} />
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
