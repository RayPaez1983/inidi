import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import "./productCard.scss";
import { useContext } from "react";
import { ProductContext } from "../../context/shop.context";


const ProductCard = () => {
   const {currentProduct} = useContext(ProductContext)
      console.log( 'shop data', currentProduct); 
  return (
    <div className="main_container">
      <section className="container-products">
        {currentProduct.map((card) => (
          <div className="product">
            <img src={card.imageUrl} alt="" className="product__img"></img>
 
            <div>
            <span className="product__price">${card.price}<BsCartPlusFill className="product__icon"/></span>
            
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCard;
