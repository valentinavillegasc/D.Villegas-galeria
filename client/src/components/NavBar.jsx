import React, { useState } from "react";
import style from "./Estilos/NavBar.module.css";
import { Link } from "react-router-dom";
import BurgerNav from "./BurgerNav";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={style.navBar}>
      <h2 className={style.logo}>D. Villegas</h2>
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
