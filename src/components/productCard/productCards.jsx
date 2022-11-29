import React, { useEffect } from "react";
import {
  BsFileMinusFill,
  BsFilePlusFill,
  BsFillCartDashFill,
} from "react-icons/bs";
import "./productCard.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  let navigate = useNavigate();
  const {
    cartCount,
    addItemToCart,
    cartItems,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  const incrementItem = (item) => {
    addItemToCart(item);
  };
  const decrementItem = (item) => {
    removeItemToCart(item);
  };
  const deleteItem = (item) => {
    clearItemFromCart(item);
  };

  useEffect(
    () => {
      if (cartCount === 0) {
        navigate("/");
      }
    },
    [cartCount],
    navigate
  );

  return (
    <div>
      <section className="shop-section">
        {cartItems.map((cart, index) => (
          <div className="shop-container" key={index}>
            <h2 className="shop-container_title">{cart.name}</h2>
            <img
              src={cart.imageUrl}
              alt=""
              className="shop-container_img"
              width="150"
              height="150"
            />
            <div>
              <BsFileMinusFill onClick={() => decrementItem(cart)} />
              <span>{cart.quantity}</span>
              <BsFilePlusFill onClick={() => incrementItem(cart)} />
            </div>
            <div>
              <span className="shop__price">${cart.price}</span>
            </div>
            <div>
              <span className="shop__removex" onClick={() => deleteItem(cart)}>
                <BsFillCartDashFill />
              </span>
            </div>
          </div>
        ))}
        <span>Total: {cartTotal}</span>
      </section>
    </div>
  );
};

export default ProductCard;
