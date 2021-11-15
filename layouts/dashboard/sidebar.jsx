import NavLink from '@/components/navlink'

export default function Sidebar({ links }) {
  return (
    <nav className="flex flex-col p-4 mt-4 space-y-4">
      {links.map((link, index) => (
        <NavLink key={index} link={link} classes="w-20" />
      ))}
    </nav>
  )
}
