import Link from 'next/link'
import Layout from "./app/Layout.js"
export default function Page() {
  return (
    <Layout>
      <h1>Index Page</h1>
      <p>
        <Link href="/other">Other Page</Link>
      </p>
    </Layout>
  )
}
