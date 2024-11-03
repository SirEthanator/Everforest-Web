import React from "react";
import Link from "next/link";

export default function Navbar({active='none'}) {
  let navLinks = [
    ['Home', '/'],
    ['Palette', '/palette'],
    ['Ports', '/ports']
  ];

  let out = []
  for (let i = 0; i < navLinks.length; i++) {
    let classes = 'navLink';
    if (active === navLinks[i][0]) {classes+=' navActive'};
    out.push(<Link key={i} href={navLinks[i][1]} className={classes}>{navLinks[i][0]}</Link>);
  };

  return (
  <div className='navBar'>
    <Link href="/" className='title'>Everforest</Link>
    {out}
  </div>
  )
}

