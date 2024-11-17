import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Title from '@/components/TitleCard';
import PortsCards from '@/components/PortsCards';
import Footer from '@/components/Footer';
import '@/styles/ports.scss'

export const metadata: Metadata = {
  title: "Everforest | Ports"
}

export default function Page() {
  return (
    <body>
      <Navbar active='Ports' />
      <Title title='Ports' />
      <PortsCards />
      <Footer />
    </body>
  )
}

