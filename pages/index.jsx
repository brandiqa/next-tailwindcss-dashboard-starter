import SiteLayout from '@/layouts/site'

export default function Home() {
  return (
    <div className="container py-4 mx-auto">
      <h1>Home page</h1>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>
}
