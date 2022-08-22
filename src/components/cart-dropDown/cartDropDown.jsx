import React from 'react'
import Button from '../common/button/mainButton';
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from './cartItem';
import "./cartDropDown.scss";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  let navigate = useNavigate();
  const {cartItems} = useContext(CartContext)
  console.log(cartItems, 'why');

  return (
    <div className="cartCard-container">
      {!cartItems.length ? 'El Carrito Esta Vacio' : 'Productos Seleccionados'}
      
      {cartItems.map((item, index)=> <CartItem cartItem={item} key={index}/>)}
      
     <Button type="" title="Ir a la Cesta" OnClick={()=> navigate("/shop")}/>
    </div>
  )
}

export default CartDropDown
