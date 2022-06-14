import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import "./newCard.scss";

const NewCards = () => {
  const cardInfo = [
    {
      id: 0,
      description:
        "Pijama camisa manga sisa y short de estampado minnie animal print",
      price: "$45.000",
      imageUrl: "images/foto1.jpeg",
    },
    {
      id: 1,
      description:
        "Pijama camisa manga sisa y short de estampado minnie animal print",
      price: "$40.000",
      imageUrl: "images/foto2.jpeg",
    },
    {
      id: 2,
      description:
        "Pijama camisa manga sisa y short de estampado minnie animal print",
      price: "$55.000",
      imageUrl: "images/foto3.jpeg",
    },
    {
      id: 3,
      description:
        "Pijama camisa manga sisa y short de estampado minnie animal print",
      price: "$48.000",
      imageUrl: "images/foto4.jpeg",
    },
    {
      id: 4,
      description:
        "Pijama camisa manga sisa y short de estampado minnie animal print",
      price: "$60.000",
      imageUrl: "images/foto5.jpeg",
    },
    {
      id: 5,
      description:
        "Pijama camisa manga sisa y short de estampado minnie animal print",
      price: "$40.000",
      imageUrl: "images/foto6.jpeg",
    },
  ];
  console.log(cardInfo, "info card aqui");
  return (
    <div className="main_container">
      <h2 className="main-tittle">LO NUEVO</h2>
      <section className="container-products">
        {cardInfo.map((card) => (
          <div className="product">
            <img src={card.imageUrl} alt="" className="product__img"></img>
            <h3 className="product__tittle">
              {card.description}
            </h3>
            <div>
            <span className="product__price">{card.price}<BsCartPlusFill className="product__icon"/></span>
            
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NewCards;
