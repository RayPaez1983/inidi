import React, {useState} from 'react'
import { BsCartPlusFill } from "react-icons/bs";
import {CartContext} from '../../context/cart.context'
import { useContext } from 'react';


const CartIcon = () => {
  const {cartCount} = useContext(CartContext)
  const [card, setCard] = useState(false)

  return (
    <div onClick={()=> setCard(!card)}>
      <BsCartPlusFill />
     <span>{cartCount}</span>
   
    </div>
  )
}

export default CartIcon
