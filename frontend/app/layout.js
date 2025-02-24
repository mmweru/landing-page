// app/layout.js
import { Jacques_Francois } from 'next/font/google';
import './globals.css';

const jacquesFrancois = Jacques_Francois({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Regen Roots',
  description: 'Decentralized platform for regenerative agriculture',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}