import React from "react";
import CategoryItem from "../category/catergory";
import "./directory.scss";

const Directory = ({ categories }) => {
  console.log(categories, 'whats this');
  
  return (
    <div className="categories-container">
              {Object.keys(categories).map((title) => (
          <>
          
           <section className="categories-container_card">
             <h1>{title}</h1>
             <CategoryItem key={categories[title][0].id} category={categories[title][0]} />
         </section>
          </>
        ))}
    </div>
  );
};

export default Directory;
