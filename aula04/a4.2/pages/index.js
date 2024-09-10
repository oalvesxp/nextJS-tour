import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <img src="avatar.jpeg" alt="Avatar de Osvaldo A. Neto" />
      </div>
    </>
  )
}
