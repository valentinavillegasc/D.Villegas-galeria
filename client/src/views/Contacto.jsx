import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import style from "./Estilos/Contacto.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getColibries } from "../redux/actions";
import axios from "axios";
import validation from "../validations";
import colibri from "../assets/Héroe.jpg";
import colibristicker from "../assets/colibri.png";
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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    colibri: "",
    message: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validation({ ...form, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://formspree.io/f/xwkdaggq", form)
      .then((res) => alert("Enviado!"))
      .catch((err) => alert("The creation failed"));
  };

  return (
    <div className={style.contacto}>
      <NavBar />
      <form className={style.formulario}>
        <div className={style.contenedorinputs}>
          <div className={style.titleContainer}>
            <h1>Formulario de contacto </h1>
            <img
              src={colibristicker}
              alt="Sticker de colibri"
              className={style.colibristicker}
            />
          </div>
          <div className={style.contenedor}>
            <div className={style.inputs}>
              <div>
                <label htmlFor="name">Nombre:</label>
                <input
                  name="name"
                  type="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
              </div>
              {errors.name && <p className={style.errors}>{errors.name}</p>}
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              {errors.email && <p className={style.errors}>{errors.email}</p>}
              <div>
                <label htmlFor="colibries">Colibri:</label>
                <select
                  name="colibri"
                  value={form.colibri}
                  onChange={handleChange}
                  placeholder="elige uno ">
                  <option>Ninguno</option>
                  {colibries.map((colibri) => {
                    return (
                      <option placeholder="elige uno ">{colibri.name}</option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="text">Mensaje:</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="¿Qué te gustaría saber?"
                />
              </div>
              {errors.message && (
                <p className={style.errors}>{errors.message}</p>
              )}
              <button className={style.button} onClick={handleSubmit}>
                Enviar
              </button>
            </div>
            <img className={style.colibri} src={colibri} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
}
