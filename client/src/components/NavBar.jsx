import React, { useState } from "react";
import style from "./Estilos/NavBar.module.css";
import { Link } from "react-router-dom";
import BurgerNav from "./BurgerNav";
import logo from "../assets/firmaDVillegas.png";
export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={style.navBar}>
      <img src={logo} alt="" />
      <div
        className={style.hamburgerMenu}
        onClick={() => setIsVisible(!isVisible)}>
        <button className={style.hamburgerMenuButton}>☰</button>
      </div>
      {isVisible && <BurgerNav />}
      <div
        className={`${style.buttons} ${
          menuVisible ? style.showMenu : style.hideMenu
        }`}>
        <Link to="/home" className={style.button}>
          Home
        </Link>
        <Link to="/biografia" className={style.button}>
          Biografía
        </Link>
      </div>
    </div>
  );
}
