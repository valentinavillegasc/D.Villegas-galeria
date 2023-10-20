import React from "react";
import style from "./Estilos/Loading.module.css";
export default function Loading() {
  return (
    <div>
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
      <h2>Buscando...</h2>
    </div>
  );
}
