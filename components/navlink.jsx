import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({ link, classes }) {
  const router = useRouter()

  return (
    <Link className="border-2" href={link.url}>
      <a
        className={`inline-block py-1 hover:text-teal-400 border-teal-500 ${classes} ${
          router.pathname === link.url
            ? 'text-teal-600 border-b-2'
            : 'text-gray-600'
        } `}
      >
        {link.label}
      </a>
    </Link>
  )
}
