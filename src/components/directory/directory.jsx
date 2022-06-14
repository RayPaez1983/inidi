import React from "react";
import CategoryItem from "../category/catergory";
import "./directory.scss";

const Directory = ({ categories }) => {
  console.log(categories, 'aqui two');
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </div>
  );
};

export default Directory;
