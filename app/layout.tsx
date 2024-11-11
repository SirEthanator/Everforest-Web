import React from 'react'
import type { Metadata } from 'next';

import { Bungee, Fira_Mono } from 'next/font/google'
const bungee_init = Bungee({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bungee',
});
const fira_init = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fira-mono',
})

export const metadata: Metadata = {
  title: "Everforest [WIP]",
  description: "A warm, comfortable, and pleasant color scheme based around green designed to be easy on the eyes."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${bungee_init.variable} ${fira_init.variable}`} lang="en">
      {children}
    </html>
  )
}

