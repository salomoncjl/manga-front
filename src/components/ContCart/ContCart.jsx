import React from 'react'
import './contcart.css'
import deku from '../../images/hero1.png'
import manga from '../../images/hero2.png'


export default function ContCart() {
  return (
    <div className="cont-cart">
        <img src={deku} alt="image-deku" className="img-size1"/>
        <img src={manga} alt="manga-hero" className="img-size2"/>
    </div>
  )
}
