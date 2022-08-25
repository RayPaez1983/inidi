import React from 'react'
import './mainButton.scss'

const Button = ({type, OnClick, title}) => {
  return (
    
        <button type={type} onClick={()=>{
          OnClick()}} className="main-button">{title}</button>
    
  )
}

export default Button
