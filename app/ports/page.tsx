import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Title from '@/components/TitleCard';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import '@/styles/ports.scss'

export const metadata: Metadata = {
  title: "Everforest | Ports"
}

let cards = [
  ['Vim', 'nf-fa-pen', 'https://github.com/sainnhe/everforest'],
  ['VS Code', 'nf-fa-pen', 'https://github.com/sainnhe/everforest-vscode'],
  ['Jetbrains', 'nf-fa-pen', 'https://github.com/francma/everforest-jetbrains'],
  ['GTK', 'nf-md-palette_swatch_variant', 'https://github.com/Fausto-Korpsvart/Everforest-GTK-Theme'],
  ['Kvantum', 'nf-md-palette_swatch_variant', 'https://github.com/SirEthanator/Hyprland-Dots/tree/main/.config/Kvantum/Everforest'],
  ['Visual Studio 2022', 'nf-fa-gear', 'https://github.com/ZachFranzen/Everforest'],
  ['Gnome Builder', 'nf-fa-gear', 'https://github.com/n1yn/everforest-gnome-builder'],
]

let components = []
for (let i = 0; i<cards.length; i++) {
  components.push(
    <Card
      key={i}
      title={cards[i][0]}
      icon={cards[i][1]}
      desc=''
      link={cards[i][2]}
      linkText='Repository'
      minWidth='340px'
      maxWidth='calc(50% - 10px)'  // 10px to account for 20px gap
      newTab
    />
  )
}

export default function Page() {
  return (
    <body>
      <Navbar active='Ports' />
      <Title title='Ports' />
      <div className='portsContent'>

        <div className='portsCards'>
          {components}
        </div>

      </div>
      <Footer />
    </body>
  )
}

