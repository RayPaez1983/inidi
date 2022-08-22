import React from "react";
import { BsCartPlusFill, BsChevronRight } from "react-icons/bs";
import "./productCard.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../common/button/mainButton";

const ProductCard = () => {
  const { cartCount, addItemToCart, cartItems } = useContext(CartContext);
  console.log(cartItems, cartCount, 'smell gooood');
   const incrementItem = (item)=>{
      addItemToCart(item)
   }
  
  return (
    <div >
      <section >
        {cartItems.map((card, index) => (
          <div className="shop" key={index}>
            <img src={card.imageUrl} alt="" className="shop_img" width="150" height="150"></img>

            <div>
              <span className="shop__price">
                ${card.price}
                <BsCartPlusFill className="shop__icon" />
              </span>
            </div>
            <span>{card.quantity}</span>
            <div onClick={()=>incrementItem(card)}><BsChevronRight/></div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCard;
