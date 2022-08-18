import {createContext, useState, useEffect } from 'react'
import SHOP_DATA from '../shopData/shopMockData.json'

export const ProductContext = createContext({
    currentProduct: []
})

export const ProductProvider = ({children}) => {
    const [currentProduct, setCurrentProduct] = useState(SHOP_DATA)
    const value = {currentProduct}
     
    
 
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}