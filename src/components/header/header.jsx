import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { ProductContext } from "../../context/shop.context";
import CartIcon from "../cart-icon/cartIcon";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./header.scss";
import CartDropDown from '../cart-dropDown/cartDropDown';

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const [toggleCart, setToggleCart] = useState(false);


  const imageUrl = "images/logoIndi.jpg";

  return (
    <div className="header-main">
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
            <a onClick={()=> setToggleCart(!toggleCart)} className="head-container_cart">
              Carrito <CartIcon />
            </a>
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
            <a onClick={()=> setToggleCart(!toggleCart)} className="head-container_cart">
              Carrito <CartIcon />
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
       {toggleCart && <CartDropDown/>}
    </div>
  );
};

export default Header;
