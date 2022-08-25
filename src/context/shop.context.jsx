import { createContext, useState, useEffect } from "react";
import { getCollectionData, addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
//  import SHOP_DATA from "../shopData/productsMockData.json";

export const ProductContext = createContext({
  currentProduct: [],
  toggleCart: Boolean,

});

export const ProductProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [toggleCart, setToggleCart] = useState(false);
  // useEffect(() => {
  //   addCollectionAndDocuments('categorias', SHOP_DATA);
  // }, []);
 
useEffect(() => {
  const getCatMap = async ()=>{
   const categoryMap = await getCollectionData()
   setCurrentProduct(categoryMap)
   console.log(categoryMap, 'categorias',currentProduct);
  }
 getCatMap()
}, [])
  const value = {
    currentProduct,
    toggleCart,
    setToggleCart,
   
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
