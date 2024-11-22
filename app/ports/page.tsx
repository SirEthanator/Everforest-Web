import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Title from '@/components/TitleCard';
import Info from '@/components/Info';
import PortsSearch from '@/components/PortsSearch';
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
      <div className='portsContent'>
        <div className='portsInfo'>
          <Info
            info={["This list does not aim to achieve full parity with the ", <a key={0} href='https://github.com/sainnhe/everforest/wiki'>official list</a>,
              ". I have made my own changes to it, so don't go telling me something is missing since it is probably intentional."]}
          />
        </div>
        <PortsSearch />
        <PortsCards />
      </div>
      <Footer />
    </body>
  )
}

