'use client'

import React from "react";
import Colour from "@/components/Colour";
import { getColours, getColoursL } from "@/functions/colours";


export default function Palette({ theme='dark' }) {
  let colours:Array<Array<string>>
  let style = {}
  if (theme === 'light') { colours = getColoursL(); style={marginTop: '0'} }
  else { colours = getColours(); theme='dark' };

  let components = [];
  for (let i = 0; i < colours.length; i++) {
    components.push(<Colour key={i} colourID={colours[i][0]} hex={colours[i][1]} name={colours[i][2]} theme={theme} />)
  };

  return (
  <div className='palette' style={style}>
    {components}
  </div>
  )
}

