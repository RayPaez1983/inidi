import React, {useState} from 'react'
import { BsCartPlusFill } from "react-icons/bs";


const CartIcon = () => {
  const [card, setCard] = useState(false)
    const [item, setItem] = useState(0)
  return (
    <div onClick={()=> setCard(!card)}>
      <BsCartPlusFill />
     <span>{item}</span>
   
    </div>
  )
}

export default CartIcon
