import React from 'react'
import Directory from "../../directory/directory";
import { useContext } from "react";
import { ProductContext } from "../../../context/shop.context";

const Men = () => {
     const {currentProduct} = useContext(ProductContext)
  return (
    <div>
       <Directory categories={currentProduct} />
    </div>
  )
}

export default Men
