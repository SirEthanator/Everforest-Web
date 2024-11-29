'use client'

import React, {useEffect} from "react";

function hideCards(searchinput) {
  let portsCards, i, e, title:string, titleLower:string

  portsCards = document.querySelectorAll('.portsCardWrapper');
  for (i=0; i<portsCards.length;i++) {
    e = portsCards[i];
    title = e.firstChild.children[1].innerText;
    titleLower = title.toLowerCase()

    if ((titleLower.includes(searchinput.toLowerCase())) || (searchinput === '')) {
      e.style = ''
    } else {
      e.style = 'display: none'
    }
  }
}

var timeoutID

export default function PortsSearch() {

  useEffect (() => {  // Start search handling on page load
    var searchbar = document.getElementById('searchbar') as HTMLInputElement;
    var searchinput = ''

    searchbar.addEventListener("keyup", () => {  // listen for keypress
      if (typeof timeoutID !== 'undefined') {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(() => {
        searchinput = `${searchbar.value}`;
        hideCards(searchinput)
      }, 300)
    });
  })

  return (
    <div className="searchContainer">
      <i className="nf nf-fa-search searchIcon"></i>
      <input id='searchbar' type="text" placeholder="Search Ports" />
    </div>
  )

}

