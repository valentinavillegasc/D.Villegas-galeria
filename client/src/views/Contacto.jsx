import React, { useEffect } from "react";
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

  return (
    <div className={style.contacto}>
      <NavBar />
      <form className={style.formulario}>
        <h1>Estamos aquí para ayudarte. ¡Contáctanos!</h1>

        <label htmlFor="name">Nombre</label>
        <input type="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" />

        <label htmlFor="text">Mensaje</label>
        <input type="text" />
      </form>
    </div>
  );
}
