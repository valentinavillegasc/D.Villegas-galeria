import React from "react";
import NavBar from "../components/NavBar";
import style from "./Estilos/Biografia.module.css";
import foto from "../assets/FotoBiografia.jpeg";
import Footer from "../components/Footer";

export default function Biografia() {
  return (
    <div className={style.biografia}>
      <NavBar />
      <div className={style.infoContainer}>
        <div className={style.fotoContainer}>
          <img src={foto} alt="Foto biografía" className={style.foto} />
        </div>
        <div className={style.infoBiografia}>
          <div className={style.nameContainer}>
            <h2>Diego Armando Villegas Tafur</h2>
            <p>Una Trayectoria Creativa y Entrañable en el Mundo del Arte.</p>
          </div>

          <div className={style.textoParteDerecha}>
            <p>
              Reconocido por su excepcional maestría en Diseño Gráfico,
              Escultura y Artes Plásticas, Diego Armando Villegas Tafur se erige
              como una figura sobresaliente en el vasto universo artístico.
              Desde los albores de su apasionado viaje en el arte, trazado por
              su formación en Diseño Gráfico en la Universidad Jorge Tadeo
              Lozano, ha demostrado un compromiso inquebrantable con su vocación
              creativa.
            </p>
            <p>
              La exploración constante y la búsqueda incesante de
              enriquecimiento artístico son rasgos distintivos de la vida de
              Diego. Más allá de su educación académica, se aventuró en el
              Taller de Arte “Alicia Tafur”, donde experimentó con escultura,
              fundición, cerámica y arte aplicado, sumergiéndose en diversas
              técnicas y medios. Posteriormente, en el Taller de Arte “Armando
              Villegas”, amplió sus horizontes creativos explorando pintura,
              artesanía y joyería artesanal.
            </p>
          </div>
        </div>
      </div>
      <div className={style.textoDebajoFoto}>
        <p>
          Su trayectoria profesional reluce con logros significativos. Como
          Diseñador Gráfico, ha dejado una huella imborrable al contribuir al
          diseño de catálogos para prestigiosas galerías y al moldear la imagen
          corporativa del "Museo de Arte Contemporáneo Bolivariano" en Santa
          Marta. Su impacto artístico también se manifiesta a través de murales
          y monumentos que ha creado, fusionando materiales con su imaginación,
          dando vida a obras memorables como la escultura "LA NEGRA DEL
          CHONTADURO" y “LA CHAPOLERA”, fundidas en bronce.
        </p>
        <p>
          Pero su legado va más allá de su propia creación artística; Diego
          también ha compartido su conocimiento y habilidades como educador y
          mentor. Ha dejado una huella profunda como Profesor de Escultura en el
          Colegio Gimnasio Campestre y como Profesor de Artesanía en Metales y
          Pintura en el Colegio Helvetia, además de su papel como maestro en
          artes plásticas en el Centro Cultural y Educativo Español Reyes
          Católicos, y actualmente en el Colegio Gimnasio de los Cerros.
        </p>
        <p>
          Además, su papel como director de Casa Tafur ilustra su dedicación
          para inspirar y nutrir las futuras generaciones de artistas. A lo
          largo de su distinguida carrera, ha participado en exposiciones
          colectivas y concursos, cosechando reconocimientos en diversas
          galerías y espacios culturales. Su legado es un testimonio elocuente
          de su dedicación incansable al arte en todas sus formas y de su
          profundo impacto en la comunidad artística y cultural. Diego Armando
          Villegas Tafur es un nombre que resonará eternamente en la historia
          del arte, dejando una marca indeleble en el mundo creativo.
        </p>
      </div>
      <Footer />
    </div>
  );
}
