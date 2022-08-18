import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { BsCartPlusFill } from "react-icons/bs";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./header.scss";

const Header = () => {
  const { currentUser } = useContext(UserContext);

  const imageUrl = "images/logoIndi.jpg";

  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to top,
      rgba(223, 137, 181, 0.349) 0%,
      rgba(191, 217, 254, 0.212) 100%`,
      }}
    >
      {currentUser ? (
        <div className="head-container">
          <nav className="head-container_nav">
            <Link to="/">Inicio</Link>
            <a onClick={signOutUser}>Cerra Sesion</a>
            <Link to="/shop">
              Carrito <BsCartPlusFill />
            </Link>
            <a>
              {currentUser.providerData.length > 0
                ? `Welcome: ${currentUser.email}`
                : ""}
            </a>
          </nav>
          <div className="head-container_title">
            <img
              src={imageUrl}
              alt="logoIndi"
              className="head-container_title_img"
            />
            <h1>PIJAMAS</h1>
          </div>
        </div>
      ) : (
        <div className="head-container">
          <nav className="head-container_nav">
            <Link to="/">Inicio</Link>
            <Link to="/sing-in"> Iniciar Sesion</Link>
            <a href="#">
              Carrito <BsCartPlusFill />
            </a>
          </nav>
          <div className="head-container_title">
            <img
              src={imageUrl}
              alt="logoIndi"
              className="head-container_title_img"
            />
            <h1>PIJAMAS</h1>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
