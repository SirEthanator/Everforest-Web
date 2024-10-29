import React from 'react';
import Navbar from '@/components/Navbar';
import Title from '@/components/TitleCard';
import Footer from '@/components/Footer';
import '@/styles/ports.css'

export default function Page() {
  return (
  <body>
    <Navbar active='Ports' />
    <Title title='Ports' />
    <div className='tmp'>🚧 Under construction! 🚧</div>
    <Footer />
  </body>
  )
}

