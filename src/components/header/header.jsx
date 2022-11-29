import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { CartContext } from "../../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import CartIcon from "../cart-icon/cartIcon";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./header.scss";
import { useSelector } from "react-redux";
import CartDropDown from "../cart-dropDown/cartDropDown";

const Header = () => {
  const { setMenuIsOpen, isMenuOpen } = useContext(CartContext);

  const currentUser = useSelector(selectCurrentUser);
  const [toggleCart, setToggleCart] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 786;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [window.innerWidth]);

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
            {width > breakpoint ? (
              <nav className="head-container_nav">
                <Link to="/">Inicio</Link>
                <a onClick={signOutUser}>Cerra Sesion</a>
                <a
                  onClick={() => setToggleCart(!toggleCart)}
                  className="head-container_cart"
                >
                  Carrito <CartIcon />
                </a>
                <a>
                  {currentUser.providerData.length > 0
                    ? currentUser.email
                    : null}
                </a>
              </nav>
            ) : (
              <div className="responsive__menu">
                <FaHamburger
                  style={{ fontSize: "24px" }}
                  onClick={() => setMenuIsOpen()}
                />
                {isMenuOpen ? (
                  <nav className="head-container_nav">
                    <Link to="/">Inicio</Link>
                    <a onClick={signOutUser}>Cerra Sesion</a>
                    <a
                      onClick={() => setToggleCart(!toggleCart)}
                      className="head-container_cart"
                    >
                      Carrito <CartIcon />
                    </a>
                    <a>
                      {currentUser.providerData.length > 0
                        ? currentUser.email
                        : null}
                    </a>
                  </nav>
                ) : null}
              </div>
            )}
            <div className="head-container_title">
              <img
                src={imageUrl}
                alt="logoIndi"
                className="head-container_title_img"
              />
              {!isMenuOpen || width > breakpoint ? <h1>PIJAMAS</h1> : null}
            </div>
          </div>
        ) : (
          <div className="head-container">
            {width > breakpoint ? (
              <nav className="head-container_nav">
                <Link to="/">Inicio</Link>
                <Link to="/sing-in"> Iniciar Sesion</Link>
                <a
                  onClick={() => setToggleCart(!toggleCart)}
                  className="head-container_cart"
                >
                  Carrito <CartIcon />
                </a>
              </nav>
            ) : (
              <div className="head-container_responsive__menu">
                <FaHamburger
                  style={{ fontSize: "24px" }}
                  onClick={() => setMenuIsOpen()}
                />
                {isMenuOpen ? (
                  <nav className="head-container_nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/sing-in"> Iniciar Sesion</Link>
                    <a
                      onClick={() => setToggleCart(!toggleCart)}
                      className="head-container_cart"
                    >
                      Carrito <CartIcon />
                    </a>
                  </nav>
                ) : null}
              </div>
            )}

            <div className="head-container_title">
              <img
                src={imageUrl}
                alt="logoIndi"
                className="head-container_title_img"
              />
              {!isMenuOpen || width > breakpoint ? <h1>PIJAMAS</h1> : null}
            </div>
          </div>
        )}
      </header>
      {toggleCart && <CartDropDown />}
    </div>
  );
};

export default Header;
