import React from 'react';
import Navbar from '@/components/Navbar';
import Title from '@/components/TitleCard';
import Footer from '@/components/Footer';
import '@/styles/ports.scss'

export default function Page() {
  return (
  <body>
    <Navbar active='Ports' />
    <Title title='Ports' />
    <div className='tmp'>Coming soon!</div>
    <Footer />
  </body>
  )
}

