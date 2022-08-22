import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import "./newCard.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ProductContext } from "../../context/shop.context";
import Button from "../common/button/mainButton";

const NewCards = () => {
   const {  addItemToCart  } = useContext(CartContext);
   const{ currentProduct} = useContext(ProductContext)
    
  const addProductToCart = (item) => {
    console.log(item, 'my item');
    addItemToCart(item)};
     
  return (
    <div className="main_container">
      <h2 className="main-tittle">LO NUEVO</h2>
      <section className="container-products">
        {currentProduct.map((card) => (
          <div className="product">
            <img src={card.imageUrl} alt="" className="product__img"></img>
            <h3 className="product__tittle">
              {card.description}
            </h3>
            <div>
            <span className="product__price">{card.price}<BsCartPlusFill className="product__icon" onClick={()=>addProductToCart(card)}/></span>
            
            </div>
            
          </div>
        ))}
      </section>
    </div>
  );
};

export default NewCards;
