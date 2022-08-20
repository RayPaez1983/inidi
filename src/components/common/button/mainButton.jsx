import React from 'react'
import './mainButton.scss'

const Button = ({type, onClick, title}) => {
  return (
    
        <button type={type} onClick={ () => onClick()} className="main-button">{title}</button>
    
  )
}

export default Button
