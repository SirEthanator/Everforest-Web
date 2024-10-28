import React from 'react';
import '@/styles/palette.css'
import Navbar from '@/components/Navbar';
import Title from '@/components/TitleCard';
import ContrastSwitcher from '@/components/Contrast';
import Palette from '@/components/Palette';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <body>
      <Navbar active='Palette' />
      <Title title='Palette' />
      <ContrastSwitcher />
      <Palette />
      <Palette theme='light' />
      <Footer />
    </body>
  )
}

