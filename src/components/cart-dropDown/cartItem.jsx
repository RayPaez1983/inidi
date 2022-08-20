import React from 'react'

const CartItem = ({cartItem}) => {
    console.log(cartItem);
    const {title, qty} = cartItem
  return (
    <div>
      <h2>{title}</h2>
      <span>{qty}</span>
    </div>
  )
}

export default CartItem
