import NavBar from '@/components/navbar/NavBar'
import './globals.css'
import {Inter} from 'next/font/google'
import Footer from '@/components/footer/Footer'
import ToasterContext from '@/context/Toaster'

const inter = Inter({ subsets: ['latin']})

export const metadata = {
  title: 'uicolor',
  description: 'Create and Generate colors, gradients, mesh gradients easily',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">
          <NavBar/>
          <ToasterContext/>
          {children}
          <Footer/>
        </main>
        </body>
    </html>
  )
}
