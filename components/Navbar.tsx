'use client'

import React from "react";
import Link from "next/link";

function toggleHamburger() {
  let menu = document.getElementById("mobileMenu");
  let links = document.getElementById("navLinksMobile");
  if (menu.style.display === "flex") {

    setTimeout(() => { menu.style.display = "none"; }, 600)
    menu.style.animation = "unDimBg 0.6s 1"
    menu.style.backgroundColor = "transparent"
    links.style.animation = "slideOut 0.6s 1"

  } else {

    menu.style.display = "flex";
    menu.style.animation = "dimBg 0.6s 1"
    menu.style.backgroundColor = "rgba(0,0,0,0.6)"
    links.style.animation = "slideIn 0.6s 1"

  }
}

export default function Navbar({active='none'}) {
  let navLinks = [
    ['Home', '/'],
    ['Palette', '/palette'],
    ['Ports', '/ports']
  ];

  let desktop = []
  let mobile  = []
  for (let i = 0; i < navLinks.length; i++) {
    let desktopClasses = ''
    let mobileClasses = ''
    if (active === navLinks[i][0]) {desktopClasses=' navActive'; mobileClasses=' navActiveMobile'};
    desktop.push(<Link key={i} href={navLinks[i][1]} className={`navLink${desktopClasses}`}>{navLinks[i][0]}</Link>);
    mobile.push(<Link key={i} href={navLinks[i][1]} className={`navLinkMobile${mobileClasses}`}>{navLinks[i][0]}</Link>);
  };

  return (
    <div className="navContainer">
      <div className='navBar'>
        <Link href="/" className='title'>Everforest</Link>
        {desktop}
      </div>

      <div className="navMobileContainer">
        <div className="navBarMobile">
          <Link href="/" className='title'>Everforest</Link>
          <button className="hamburger" onClick={() => toggleHamburger()}><i className="nf nf-oct-three_bars"></i></button>
        </div>
        <div id="mobileMenu">
          <div id="navLinksMobile">
            {mobile}
          </div>
        </div>
      </div>
    </div>
  )
}

