import React from "react";
import { Link } from "react-router-dom";

import { BsCartPlusFill } from "react-icons/bs";
import "./header.scss";

const Header = () => {
  const imageUrl = "images/logoIndi.jpg";
  console.log("este es mi Header");
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to top,
      rgba(223, 137, 181, 0.349) 0%,
      rgba(191, 217, 254, 0.212) 100%`,
      }}
    >
     
      <div className="head-container">
        <nav className="head-container_nav">
          <Link to="/">Inicio</Link>
          <Link to="/sing-in">Ingresar</Link>
          <a href="#">
            My Car <BsCartPlusFill/>
          </a>
        </nav>
        <div className="head-container_title">
           <img src={imageUrl} alt="logoIndi" className="head-container_title_img"/>
          <h1>PIJAMAS</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
