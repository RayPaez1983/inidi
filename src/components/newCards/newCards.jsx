import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import "./newCard.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { categoriesSelector } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const NewCards = () => {
  const { addItemToCart } = useContext(CartContext);
  const categoriesMap = useSelector(categoriesSelector);

  const addProductToCart = (item) => {
    addItemToCart(item);
  };

  return (
    <div className="main_container">
      {Object.keys(categoriesMap).map((title) => (
        <>
          <h1>{title}</h1>
          <section className="container-products">
            {categoriesMap[title].map((item) => (
              <div className="product">
                <img src={item.imageUrl} alt="" className="product__img"></img>
                <h3 className="product__tittle">{item.name}</h3>
                <div>
                  <span className="product__price">${item.price}</span>
                  <BsCartPlusFill
                    className="product__icon"
                    onClick={() => addProductToCart(item)}
                  />
                </div>
              </div>
            ))}
          </section>
        </>
      ))}
    </div>
  );
};

export default NewCards;
