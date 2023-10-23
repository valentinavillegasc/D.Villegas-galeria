import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getColeccionesById, cleanDetail } from "../redux/actions";
import { useParams } from "react-router-dom";
import CardsColibries from "../components/CardsColibries";
import style from "./Estilos/DetailColeccion.module.css";

export default function DetailColeccion() {
  const coleccion = useSelector((state) => state.coleccionId);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getColeccionesById(params.id));
    return () => {
      cleanDetail();
    };
  }, [dispatch, params.id]);
  console.log(coleccion);
  return (
    <div className={style.DetailColeccion}>
      <NavBar />
      <h1 className={style.name}>{coleccion.name}</h1>
      <p className={style.description}>{coleccion.description}</p>
      <CardsColibries colibries={coleccion.Colibris} />
    </div>
  );
}
