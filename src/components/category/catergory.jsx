import React from "react";
import "./categories.scss";

const CategoryItem = ({ category }) => {

  const { imageUrl, title } = category;
  return (
    <>
      <div className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Compralo Ahora!</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
