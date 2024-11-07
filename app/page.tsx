import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card'
import Footer from '@/components/Footer';
import '@/styles/home.scss'

export default function Page() {
  return (
    <body>
      <Navbar active='Home' />

      <div className='homeContent'>
        <div className='homeText'>
          <h1 className='homeTitle'>Warm, comfortable, pleasant</h1>
          <h2 className='homeDesc'>Everforest is a green based color scheme; it's designed to be warm and soft in order to protect developers' eyes.</h2>
        </div>
        <div className='homeImageWrapper'>
          <Image src="https://user-images.githubusercontent.com/37491630/206063892-e1b2197e-2404-4ab4-8570-3dee96242ba1.png"
                 alt="Screenshot of Everforest Vim"
                 fill
                 className='homeImage'/>
        </div>
      </div>
      <div className='homeCards'>
        <Card
          icon='nf-md-palette_swatch_variant'
          title='Beautiful colors'
          desc='Discover the carefully constructed palette of the Everforest color scheme.'
          link='/palette'
          linkText='Palette'
        />
        <Card
          icon='nf-fa-cube'
          title='Themes for all'
          desc='Enjoy Everforest throughout your system with themes for popular applications.'
          link='/ports'
          linkText='Ports'
        />
        <Card
          icon='nf-fa-tree'
          title='Where it all begins'
          desc='Check out the original color scheme created for Vim.'
          link='https://github.com/sainnhe/everforest'
          linkText='Everforest'
          newTab
        />
      </div>

      <Footer />
    </body>
  )
}

