import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Post() {
  const router = useRouter()
  console.log(router)

  return (
    <>
      <div>
        <p>
          <strong>Titulo:</strong> {router.query.slug}
        </p>
        <ul>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/posts/post-sobre-nextjs">Post</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
