import React from 'react';
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
        {/* Add theme preview here */}
      </div>

      <Footer />
    </body>
  )
}

