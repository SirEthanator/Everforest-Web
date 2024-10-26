import { getColours, getColoursL } from "@/functions/colours";

export function copy(colourID:string, theme:string='dark'): void {
  let colours:Array<Array<string>>
  if (theme === 'light') { colours = getColoursL() }
  else { colours = getColours() };

  let rowIndex = colours.findIndex(row => row.indexOf(colourID) !== -1)

  navigator.clipboard.writeText(colours[rowIndex][1]);
}

