// src/app/layout.tsx
import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Café',
  description: 'Cardápio online de comidas, ramem, sodas e cappuccino',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
