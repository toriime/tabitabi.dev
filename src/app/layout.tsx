import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/style/globals.css'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TabTabi',
  description: 'Oficjalna strona TabiTabi Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + 'h-full'}>
        <NavBar />
        <main className="mt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
