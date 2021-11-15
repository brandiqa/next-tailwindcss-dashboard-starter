import NavLink from '@/components/navlink'
import Link from 'next/link'

function Navbar({ links }) {
  return (
    <nav className="container flex items-center justify-between py-4 mx-auto">
      <div className="font-mono text-3xl font-extrabold uppercase">Brand</div>
      <div className="space-x-4">
        {links.map((link, index) => (
          <NavLink key={index} link={link} classes="w-16 text-center" />
        ))}
      </div>
      <div className="space-x-4">
        <Link href="/dashboard">
          <a className="px-2 py-1 text-teal-600 border-2 border-teal-500 rounded hover:text-teal-500 hover:border-teal-400">
            Login
          </a>
        </Link>
        <Link href="/dashboard">
          <a className="px-2 py-1 text-white bg-teal-500 border-2 border-teal-500 rounded hover:bg-transparent hover:text-teal-500 hover:border-teal-400">
            Register
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
