import React from 'react'
import Directory from "../../directory/directory";
import { useContext } from "react";
import { ProductContext } from "../../../context/shop.context";

const Accessories = () => {
 const { currentProduct } = useContext(ProductContext);
console.log(currentProduct);
    return (
        <div>
            <Directory categories={currentProduct} />
        </div>
    )
}

export default Accessories
