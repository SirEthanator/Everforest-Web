'use client'

import React from "react";
import Link from "next/link";

function toggleHamburger() {
  let e = document.getElementById("navLinksMobile");
  if (e.style.display === "flex") {
    e.style.display = "none";
  } else {
    e.style.display = "flex";
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
        <div id="navLinksMobile">
          {mobile}
        </div>
      </div>
    </div>
  )
}

