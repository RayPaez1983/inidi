import React from 'react'
import './cartItem.scss'

const CartItem = ({cartItem}) => {

    const {name, quantity, imageUrl, price} = cartItem
  return (
    <div className="cartItem-container">
      <img src={imageUrl} alt="" width="50" height="50" className="cartItem-container_img"/>
      <h2>{name}</h2>
    
      <span>{`${quantity} X $${price}`} </span>
    </div>
  )
}

export default CartItem
