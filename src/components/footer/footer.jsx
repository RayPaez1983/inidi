import React from 'react'
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="box">
            <h2 className="h2_box">SIGUENOS</h2>
            <div className="red-social">
                <a href="#" className="instagram"><BsInstagram/> indii_pijamas</a>
                <a href="#" className="whatsapp"><BsWhatsapp/> Whatsapp 311 7183992</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
