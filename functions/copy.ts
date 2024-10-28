'use client'

import { getColours, getColoursL } from "@/functions/colours";

export function copy(colourID:string, theme:string='dark'): void {
  let colours:Array<Array<string>>
  if (theme === 'light') { colours = getColoursL() }
  else { colours = getColours() };

  let rowIndex = colours.findIndex(row => row.indexOf(colourID) !== -1);
  let element = document.getElementById(colourID)
  let colour:string
  let newText:string
  try {
    colour = 'green'
    newText = 'Copied!'
    navigator.clipboard.writeText(colours[rowIndex][1]);
  } catch {
    colour = 'red'
    newText = 'Failed!'
  };

  element.style.color = 'var(--'+colour+')';
  setTimeout(() => {element.style.color = 'var(--fg)'}, 2000);
  let oldText = element.innerHTML;
  element.innerHTML = `<i class="nf nf-fa-copy"></i> ${newText}`
  setTimeout(() => {element.innerHTML = oldText}, 2000);
}

