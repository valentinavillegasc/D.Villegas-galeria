import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import style from "./Estilos/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getColecciones } from "../redux/actions";
import CardsColecciones from "../components/CardsColecciones";
import { Link } from "react-router-dom";

export default function Home() {
  const colecciones = useSelector((state) => state.allColecciones);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColecciones());
  }, [dispatch]);
  return (
    <div className={style.homeContainer}>
      <NavBar />
      <div className={style.home}>
        <h1>Colecciones</h1>
        <CardsColecciones colecciones={colecciones} />
        <Link to="/colibries">
          <button className={style.button}>Ver todos</button>
        </Link>
      </div>
    </div>
  );
}
