import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import "./newCard.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ProductContext } from "../../context/shop.context";


const NewCards = () => {
  const { addItemToCart } = useContext(CartContext);
  const { currentProduct } = useContext(ProductContext);

  const addProductToCart = (item) => {
    addItemToCart(item);
  };
  console.log(currentProduct, "currentProd");
  return (
    <div className="main_container">
     
        {Object.keys(currentProduct).map((title) => (
          <>
          <h1>{title}</h1>
           <section className="container-products">
          {currentProduct[title].map((item)=>(   <div className="product">
            <img
              src={item.imageUrl}
              alt=""
              className="product__img"
            ></img>
            <h3 className="product__tittle">
              {item.name}
            </h3>
            <div>
              <span className="product__price">
                ${item.price}
              </span>
              <BsCartPlusFill
                className="product__icon"
                onClick={() => addProductToCart(item)}
              />
            </div>
          </div>))
       }</section>
          </>
        ))}
      
    </div>
  );
};

export default NewCards;
