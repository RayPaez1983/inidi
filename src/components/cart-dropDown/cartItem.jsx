import React from 'react'
import './cartItem.scss'

const CartItem = ({cartItem}) => {
   console.log(cartItem, 'no se mugre con rolandia');
    const {title, quantity, imageUrl, price} = cartItem
  return (
    <div className="cartItem-container">
      <img src={imageUrl} alt="" width="50" height="50" className="cartItem-container_img"/>
      <h2>{title}</h2>
    
      <span>{`${quantity} X $${price}`} </span>
    </div>
  )
}

export default CartItem
