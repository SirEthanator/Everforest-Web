'use client'

import React from "react";
import Link from "next/link";
import "@/styles/global/navbar.scss";

function toggleHamburger() {
  let menu = document.getElementById("mobileMenu");
  let links = document.getElementById("navLinksWrapMobile");
  let hamburger = document.getElementById("hamburger");
  if (menu.style.display === "flex") {

    setTimeout(() => { menu.style.display = "none"; }, 400);
    menu.style.animation = "unDimBg 0.4s 1 forwards";
    links.style.animation = "slideOut 0.4s 1 forwards";
    hamburger.innerHTML = `<i class="nf nf-oct-three_bars"></i>`;

  } else {

    menu.style.display = "flex";
    menu.style.animation = "dimBg 0.4s 1 forwards";
    links.style.animation = "slideIn 0.4s 1 forwards";
    hamburger.innerHTML = `<i class="nf nf-fae-thin_close"></i>`;

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
        <button id="hamburger" onClick={() => toggleHamburger()}><i className="nf nf-oct-three_bars"></i></button>
        <div className="titleWrapperMobile">
          <Link href="/" className='title'>Everforest</Link>
        </div>

        <div id="mobileMenu">
          <div id="navLinksWrapMobile">
            <div id="navLinksMobile">
              {mobile}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

