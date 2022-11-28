import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  isMenuOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CART_ACTION_TYPES = {
  SET_CART_IS_OPEN: "SET_CART_IS_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_MENU_OPEN: "SET_MENU_OPEN",
};
export const cartReducer = (state, action) => {
  console.log(action, "user current");
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_IS_OPEN:
      return { ...state, isCartOpen: payload };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.SET_MENU_OPEN:
      return { ...state, ...payload };
    default:
      throw new Error(`Wrong type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: null,
  isMenuOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
export const CartProvider = ({ children }) => {
  const [
    { isCartOpen, cartItems, cartCount, cartTotal, isMenuOpen },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = () => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_IS_OPEN,
      payload: !isCartOpen,
    });
  };
  const setMenuIsOpen = () => {
    dispatch({
      type: CART_ACTION_TYPES.SET_MENU_OPEN,
      payload: { isMenuOpen: !isMenuOpen },
    });
  };

  const updateCartItemsReducer = (newCartItem) => {
    const newCartCount = newCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItem,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const addingToCart = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(addingToCart);
  };

  const removeItemToCart = (cartItemToRemove) => {
    const removingFromCart = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(removingFromCart);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const clearCart = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(clearCart);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    setMenuIsOpen,
    isMenuOpen,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
