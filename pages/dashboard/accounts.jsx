import DashboardLayout from '@/layouts/dashboard'

export default function AccountsPage() {
  return (
    <div>
      <h1>Accounts</h1>
    </div>
  )
}

AccountsPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
