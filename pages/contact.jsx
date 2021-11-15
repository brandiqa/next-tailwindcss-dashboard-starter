import SiteLayout from '@/layouts/site'

export default function Contact() {
  return (
    <div className="container py-4 mx-auto">
      <h1>Contact page</h1>
    </div>
  )
}

Contact.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>
}
