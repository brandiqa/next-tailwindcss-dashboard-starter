import SiteLayout from '@/layouts/site'
import Sidebar from './sidebar'

export default function DashboardLayout({ children }) {
  const links = [
    {
      label: 'Overview',
      url: '/dashboard',
    },
    {
      label: 'Profile',
      url: '/dashboard/profile',
    },
    {
      label: 'Accounts',
      url: '/dashboard/accounts',
    },
  ]

  return (
    <SiteLayout>
      <div className="flex items-stretch flex-grow">
        <aside className="w-48 bg-gray-200">
          <Sidebar links={links} />
        </aside>
        <main className="flex-grow p-4">{children}</main>
      </div>
    </SiteLayout>
  )
}
