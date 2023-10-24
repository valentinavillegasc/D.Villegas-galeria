import React from "react";
import { Link } from "react-router-dom";
import style from "./Estilos/Footer.module.css";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <Link to="/home" className={style.button}>
          Home
        </Link>
        <Link to="/biografia" className={style.button}>
          Biografía
        </Link>
        <Link to="/contacto" className={style.button}>
          Contacto
        </Link>
      </div>
      <div className={style.socialmedia}>
        <a
          href="https://www.instagram.com/diego_villegas_tafur/"
          target="_blank">
          <BsInstagram className={style.icon} />
        </a>
        <a
          href="https://www.facebook.com/dievillegas?locale=es_LA"
          target="_blank">
          <AiOutlineFacebook className={style.icon} />
        </a>
        <h3>Made with ❤️ by Valentina Villegas</h3>
      </div>
    </footer>
  );
}
