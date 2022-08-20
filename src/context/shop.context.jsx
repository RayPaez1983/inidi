import {createContext, useState, useEffect } from 'react'
import SHOP_DATA from '../shopData/shopMockData.json'
import PRODUCTS_DATA from '../shopData/productsMockData.json'

export const ProductContext = createContext({
    currentProduct: [],
    toggleCart: Boolean,
    selectedProduct: [],
    productData: []
})

export const ProductProvider = ({children}) => {
    const [currentProduct, setCurrentProduct] = useState(PRODUCTS_DATA)
    const [productData, setProductData] = useState(PRODUCTS_DATA)
    const [toggleCart, setToggleCart] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState([])
    console.log(productData, 'ramon lampara');
    const value = {currentProduct, toggleCart, setToggleCart, selectedProduct,  productData}
     
    
 
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}