import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import style from "./Estilos/Contacto.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getColibries } from "../redux/actions";
export default function Contacto() {
  const colibries = useSelector((state) => state.allColibries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColibries());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    colibries: [],
    message: "",
  });

  return (
    <div className={style.contacto}>
      <NavBar />
      <form className={style.formulario}>
        <h1>Estamos aquí para ayudarte. ¡Contáctanos!</h1>

        <label htmlFor="name">Nombre</label>
        <input type="name" value={form.name} />

        <label htmlFor="email">Email:</label>
        <input type="email" value={form.email} />
        <label htmlFor="colibries" value={form.colibries}>
          Colibries
        </label>
        <select>
          <option>Ninguno</option>
          {colibries.map((colibri) => {
            return <option value={colibri.name}>{colibri.name}</option>;
          })}
        </select>

        <label htmlFor="text">Mensaje</label>
        <textarea value={form.message} />
      </form>
    </div>
  );
}
