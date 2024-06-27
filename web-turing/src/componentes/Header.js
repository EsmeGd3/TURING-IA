import React from 'react';
import './Header.css';
import Main from './Main';
import logo from '../images/lOGO.png'; // Ajusta la ruta si es necesario
import heroImage from '../images/image3.png'; // Ajusta la ruta si es necesario
const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="name-date">
          <span className="name">Dalia Esmeralda Garcia Diaz</span>
          <span className="date">25/06/2024</span>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <img className="imgLogo" src={logo} alt="Logo" />
        </div>
        <div className="menu-toggle" id="menu-toggle">
          ☰
        </div>
        <ul className="nav-links">
          <li><a className="principal" href="#">Inicio</a></li>
          <li><a className="secundario" href="#turing">Adopción</a></li>
          <li><a className="secundario" href="#main">Nosotros</a></li>
          <li><a className="secundario" href="#">Contacto</a></li>
        </ul>
      </nav>
      <div id='turing' className="hero">
        <div className="hero-content">
          <div className="name1-top">
            <h3 className="cta-button1">Adopta con Responsabilidad</h3>
            <h3 className="cta-button1">Adopta con amor</h3>
          </div>
          <h1>¿POR QUÉ ADOPTAR?</h1>
          <p>
          Adoptar no solo salva vidas, sino que también le das a una mascota una segunda oportunidad para ser amada y cuidada.
          </p>
          <br />
          <button className="cta-button">Visita nuestra Página de Facebook</button>
        </div>
        <img className="logoPresentacion" src={heroImage} alt="" />
      </div>
     
    
    </header>
   
    
  );
  
};


export default Header;
