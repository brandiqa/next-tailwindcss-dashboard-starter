import SiteLayout from '@/layouts/site'

export default function About() {
  return (
    <div className="container py-4 mx-auto">
      <h1>About page</h1>
    </div>
  )
}

About.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>
}
