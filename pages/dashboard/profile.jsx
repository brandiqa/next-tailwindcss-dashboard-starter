import DashboardLayout from '@/layouts/dashboard'

export default function ProfilePage() {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

ProfilePage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
