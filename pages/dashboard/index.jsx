import DashboardLayout from '@/layouts/dashboard'

export default function OverviewPage() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

OverviewPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
