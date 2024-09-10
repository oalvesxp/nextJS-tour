import Link from 'next/link'

export default function PrefetchScreen(): JSX.Element {
  return (
    <>
      <h1>Prefetch Page!</h1>

      <div>
        <ul>
          <li>
            {/** Default: True */}
            {/** True: faz um pré-download da página do Link */}
            {/** False: não faz o download porém quando é feito o hover no link ele faz o pré-download */}
            <Link href="/" prefetch={false}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" prefetch={false}>
              About
            </Link>
          </li>
          <li>
            <Link href="/prefetch" prefetch={false}>
              Prefetch
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
