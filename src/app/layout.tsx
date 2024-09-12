import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
   title: 'Test Task',
   description: 'Created by Mukhin Vladimir',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: ReactNode
}>) {
   return (
      <html lang="en" className="light">
         <body>{children}</body>
      </html>
   )
}
