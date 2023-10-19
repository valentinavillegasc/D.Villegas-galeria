import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import style from "./Estilos/Contacto.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getColibries } from "../redux/actions";
import axios from "axios";

export default function Contacto() {
  const colibries = useSelector((state) => state.allColibries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColibries());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    colibri: "",
    message: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://formspree.io/f/xwkdaggq", form)
      .then((res) => alert("Enviado!"));
  };
  return (
    <div className={style.contacto}>
      <NavBar />
      <form className={style.formulario}>
        <h1>Estamos aquí para ayudarte. ¡Contáctanos!</h1>
        <div className={style.inputs}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              name="name"
              type="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="colibries" value={form.colibries}>
              Colibri
            </label>
            <select name="colibri" value={form.colibri} onChange={handleChange}>
              <option>Ninguno</option>
              {colibries.map((colibri) => {
                return <option>{colibri.name}</option>;
              })}
            </select>
          </div>
          <div>
            <label htmlFor="text">Mensaje</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
}
