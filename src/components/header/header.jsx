import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { BsCartPlusFill } from "react-icons/bs";
import "./header.scss";

const Header = () => {
  const {currentUser} = useContext(UserContext)
 
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
     
  { currentUser ?   <div className="head-container">
        <nav className="head-container_nav">
          <Link to="/">Inicio</Link>
          <Link to="/sing-in">Cerra Sesion</Link>
          <a href="#">
            Carrito <BsCartPlusFill/>
          </a>
          <a>{currentUser.user.providerData.length > 0 ? `Welcome: ${currentUser.user.email}` :  ''}</a>
        </nav>
        <div className="head-container_title">
           <img src={imageUrl} alt="logoIndi" className="head-container_title_img"/>
          <h1>PIJAMAS</h1>
        </div>
      </div> 
      :  <div className="head-container">
        <nav className="head-container_nav">
          <Link to="/">Inicio</Link>
          <Link to="/sing-in"> Iniciar Sesion</Link>
          <a href="#">
            Carrito <BsCartPlusFill/>
          </a>
         
        </nav>
        <div className="head-container_title">
           <img src={imageUrl} alt="logoIndi" className="head-container_title_img"/>
          <h1>PIJAMAS</h1>
        </div>
      </div>}
    </header>
  );
};

export default Header;
