'use client'

import React from "react";
import {copy} from '@/functions/copy';

export default function Colour({ colourID, hex, name, theme }) {
  let style = {}
  if (colourID.includes('gray2')) {
    style = {border: 'none'}
  }
  return (
    <div className='color' style={style}>
      <p className='colorTitle'>
        <span className='swatch' style={{backgroundColor: 'var(--'+colourID+')'}}></span>{name}
      </p>
      <button className='copyButton' onClick={() => copy(colourID,theme)} id={colourID}>
        <i className="nf nf-fa-copy copyIcon"></i> {hex}
      </button>
    </div>
  )
}

