import React from 'react'
import Button from '../common/button/mainButton';
import { useContext } from "react";
import { ProductContext } from "../../context/shop.context";
import CartItem from './cartItem';
import "./cartDropDown.scss";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  let navigate = useNavigate();
  const {selectedProduct, productData} = useContext(ProductContext)
  console.log(selectedProduct);
  return (
    <div className="cartCard-container">
      {!selectedProduct.length ? 'El Carrito Esta Vacio' : 'Productos Seleccionados'}
      <div  className="cartCard-container_content">{}</div>
      {productData.map((item)=> <CartItem cartItem={item}/>)}
    
     <Button type="" title="Ir a la Cesta" onClick={()=> navigate("/shop")}/>
    </div>
  )
}

export default CartDropDown
