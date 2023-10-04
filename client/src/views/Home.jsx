import React from "react";
import NavBar from "../components/NavBar";
import style from "./Estilos/Home.module.css";

export default function Home() {
  return (
    <div className={style.home}>
      <NavBar />
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );
}
