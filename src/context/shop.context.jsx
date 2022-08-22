import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shopData/shopMockData.json";
import PRODUCTS_DATA from "../shopData/productsMockData.json";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem === productToAdd.id
  );
  if (existingCartItem) {
    return [
      cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      ),
    ];
  }
  return [...cartItems, { ...productToAdd, qty: 1 }];
};

export const ProductContext = createContext({
  currentProduct: [],
  toggleCart: Boolean,
  selectedProduct: [],
  setItemsCart: () => {},
  productData: [],

});

export const ProductProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState(PRODUCTS_DATA);
  const [productData, setProductData] = useState(PRODUCTS_DATA);
  const [toggleCart, setToggleCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const addItemsCart = (productToAdd) => {
    setSelectedProduct(addCartItem(selectedProduct, productToAdd));
  };

  const value = {
    currentProduct,
    toggleCart,
    setToggleCart,
    selectedProduct,
    productData,
    addItemsCart,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
