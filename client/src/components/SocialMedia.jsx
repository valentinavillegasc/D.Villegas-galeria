import React from "react";
import style from "./Estilos/SocialMedia.module.css";
import { BsInstagram } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
export default function SocialMedia() {
  return (
    <div className={style.socialmediaContainer}>
      <div className={style.socialmedia}>
        <a
          href="https://www.instagram.com/diego_villegas_tafur/"
          target="_blank"
          rel="noreferrer">
          <BsInstagram className={style.icon} />
        </a>
        <a
          href="https://www.facebook.com/dievillegas?locale=es_LA"
          target="_blank"
          rel="noreferrer">
          <FaSquareFacebook className={style.icon} />
        </a>
      </div>
      <p>Siguenos!</p>
    </div>
  );
}
