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
  title: "Everforest",  // Default title if not specified on page
  description: "A warm, comfortable, and pleasant color scheme based around green designed to be easy on the eyes.",
  keywords: ['everforest', 'green', 'colorscheme', 'colourscheme', 'color scheme', 'colour scheme', 'color palette', 'colour palette'],
  authors: [{name: 'Ethan M.', url: 'https://github.com/SirEthanator'}],
  verification: { google: "FjIB76Sma1-os92AEkFdtb5Hl5Sf20bXW8BfH2WzGVQ" }
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

