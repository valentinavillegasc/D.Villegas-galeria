import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import style from "./Estilos/Colibries.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getColibries } from "../redux/actions";
import CardsColibries from "../components/CardsColibries";
import Footer from "../components/Footer";

export default function Colibries() {
  const colibries = useSelector((state) => state.allColibries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColibries());
  }, [dispatch]);

  return (
    <div className={style.colibries}>
      <NavBar />
      <div className={style.colibriesContainer}>
        <h1>Colibries</h1>
        <CardsColibries colibries={colibries} />
      </div>
      <Footer />
    </div>
  );
}
