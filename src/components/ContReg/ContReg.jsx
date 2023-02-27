import React from 'react'
import './contreg.css'
import RegLabels from '../RegLabels/RegLabels';
import Welcome from '../Welcome/Welcome';

export default function ContReg() {
  return (
    <div class="cont-reg">
        <Welcome/>
        <RegLabels/>
    </div>
  )
}
