import './globals.css'
import { Rubik } from 'next/font/google'

// components
import Navbar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {/* <nav>
          <h1>Dojo Helpdesk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
        </nav> */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}