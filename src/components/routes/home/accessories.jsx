import React from 'react'
import Directory from "../../directory/directory";
import { useContext } from "react";
import { ProductContext } from "../../../context/shop.context";

const Accessories = () => {
 const {productData} = useContext(ProductContext)
    return (
        <div>
            <Directory categories={productData} />
        </div>
    )
}

export default Accessories
