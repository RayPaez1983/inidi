import {createContext, useState, useEffect } from 'react'
import SHOP_DATA from '../shopData/shopMockData.json'

export const ProductContext = createContext({
    currentProduct: [],
    toggleCart: Boolean
})

export const ProductProvider = ({children}) => {
    const [currentProduct, setCurrentProduct] = useState(SHOP_DATA)
    const [toggleCart, setToggleCart] = useState(false)
    const value = {currentProduct, toggleCart, setToggleCart }
     
    
 
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}