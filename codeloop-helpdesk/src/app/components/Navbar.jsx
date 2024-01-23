import Image from 'next/image'
import Link from 'next/link'
import Logo from './Codeloop_No_Name.png'


export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Codeloop Logo'
        width= {70}
        quality={100}
        placeholder='blur'
        />
      <h1>CodeLoop Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}