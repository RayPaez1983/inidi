import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./slider.scss";

const HomeSlider = () => {
  const images = [
    {
      id: 0,
      title: "Pijamas",
      imageUrl: "images/uno.jpg",
    },
    {
      id: 1,
      title: "Batas",
      imageUrl: "images/dos.jpg",
    },
    {
      id: 2,
      title: "Pantuflas",
      imageUrl: "images/tres.jpg",
    },
    {
      id: 3,
      title: "Cojines",
      imageUrl: "images/cuatro.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  useEffect(() => {
    setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
  }, [images.length]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  return (
    <div className="slideContainer">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />

      {images.map(({ id, title, imageUrl }) => {
        console.log(imageUrl, "la chimba");
        return (
          <div className={id === current ? "slide active" : "slide"} key={id}>
            {id === current && (
              <img
                src={imageUrl}
                key={id}
                alt={title}
                className="imageSlider"
              />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </div>
  );
};

export default HomeSlider;
