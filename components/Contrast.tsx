'use client'

import React, {useEffect} from "react";
import { getHard, getMed, getSoft, getHardL, getMedL, getSoftL, getColours } from "@/functions/colours";

let contrastIDs = ['contrastHard', 'contrastMed', 'contrastSoft'];

function setColours(colours: Array<Array<string>>) {
  for (let i in colours) {
    let element = document.querySelector(`#${colours[i][0]}`) as HTMLElement
    document.documentElement.style.setProperty(`--${colours[i][0]}`, colours[i][1]);  // Set css variable
    element.innerHTML = `<i class="nf nf-fa-copy"></i> ${colours[i][1]}`;  // Set button text
  }
};

function setActive(id: string) {
  if ( ! (contrastIDs.includes(id)) ) {
    throw new Error('Invalid contrastID provided')
  }
  for (let i in contrastIDs) {
    let element = document.getElementById(contrastIDs[i]) as HTMLElement
    element.classList.remove("contrastActive")  // Ensure no contrast button has the contrastActive class
  }
  (document.getElementById(id) as HTMLElement).classList.add('contrastActive')  // Set contrastActive class
}


export default function ContrastSwitcher() {
  useEffect(() => {  // Run on page load
    window.onbeforeunload = function () {  // Runs before page unloads
      localStorage.clear();  // Clear local storage to reset contrast
    };

  let contrast = getColours('string');
  if (contrast === 'hard') { hard() }
  else if (contrast === 'med') { med() }
  else if (contrast === 'soft') { soft() }
  else { hard() };

  }, []);

  function hard() {
    setColours(getHard());
    setColours(getHardL());
    setActive('contrastHard');
    localStorage.setItem('contrast', 'hard');  // Stores contrast for getColours() function
  };

  function med() {
    setColours(getMed());
    setColours(getMedL());
    setActive('contrastMed');
    localStorage.setItem('contrast', 'med');
  };

  function soft() {
    setColours(getSoft());
    setColours(getSoftL());
    setActive('contrastSoft');
    localStorage.setItem('contrast', 'soft');
  };

  return (
    <div className='contrastSwitcher'>
    <button className='contrastButton contrastActive' id="contrastHard" onClick={hard}>Hard</button>
    <button className='contrastButton' id="contrastMed" onClick={med}>Medium</button>
    <button className='contrastButton' id="contrastSoft" onClick={soft}>Soft</button>
  </div>
  )
}

