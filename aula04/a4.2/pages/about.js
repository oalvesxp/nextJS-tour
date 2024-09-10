import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>About Page!</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
