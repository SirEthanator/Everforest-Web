import React from 'react';
import Navbar from '@/components/Navbar';
import ContrastSwitcher from '@/components/Contrast';
import Palette from '@/components/Palette';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <body>
      <Navbar active='Palette' />
      <ContrastSwitcher />
      <Palette />
      <Palette theme='light' />
      <Footer />
    </body>
  )
}

