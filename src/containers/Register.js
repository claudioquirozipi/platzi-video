import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { registerRequest } from "../actions";
import "../assets/styles/components/Register.scss";
import Header from "../components/Header";

const Register = (props) => {
  const { history, registerRequest } = props;
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerRequest(form);
    history.push("/");
  };

  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form onSubmit={handleSubmit} className="register__container--form">
            <input
              name="name"
              onChange={handleInput}
              value={form.name}
              className="input"
              type="text"
              placeholder="Nombre"
            />
            <input
              name="email"
              onChange={handleInput}
              value={form.email}
              className="input"
              type="text"
              placeholder="Correo"
            />
            <input
              name="password"
              onChange={handleInput}
              value={form.password}
              className="input"
              type="password"
              placeholder="Contraseña"
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
