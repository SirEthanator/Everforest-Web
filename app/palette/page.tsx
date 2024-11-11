import React from 'react';
import type { Metadata } from 'next';
import '@/styles/palette.scss'
import Navbar from '@/components/Navbar';
import Title from '@/components/TitleCard';
import ContrastSwitcher from '@/components/Contrast';
import Palette from '@/components/Palette';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Everforest | Palette"
}

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

