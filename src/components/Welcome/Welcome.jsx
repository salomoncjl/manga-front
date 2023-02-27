import React from 'react'
import logoComplete from '../../images/Logomr.png'
import './welcome.css'


export default function Welcome() {
  return (
    <div class="welcome">
        <img src={logoComplete} class="logo-complete" alt="logo-complete"/>
        <h1>Welcome!</h1>
        <p class="text-reg">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
    </div>
  )
}
