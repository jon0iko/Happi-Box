'use client'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './navbar'
import footer from '../footer'


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <ChakraProvider>
            <Nav />
            {children}
          </ChakraProvider>
        </body>
      </html>
    )
  }