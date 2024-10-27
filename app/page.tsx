import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/home.css'

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

      <Footer />
    </body>
  )
}

