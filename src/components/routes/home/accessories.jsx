import React from "react";
import Directory from "../../directory/directory";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/shop.context";
import { categoriesSelector } from "../../../store/categories/category.selector";
import { useSelector } from "react-redux";

const Accessories = () => {
  const { accessories } = useParams();
  const categoriesMap = useSelector(categoriesSelector);
  console.log(categoriesMap, "aiqiorestan las categories", accessories);
  const { currentProduct } = useContext(ProductContext);
  console.log(currentProduct);
  return (
    <div>
      <Directory categories={categoriesMap} />
    </div>
  );
};

export default Accessories;
