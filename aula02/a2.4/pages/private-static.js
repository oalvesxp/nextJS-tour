import Box from '../src/components/Box'
import Button from '../src/components/Button'
import { useRouter } from 'next/router'
import nookies from 'nookies'

export default function PrivateScreen(props) {
  const router = useRouter()

  return (
    <Box>
      <h1>Parabéns!</h1>
      <p>Você acessou uma àrea restrita.</p>
      <Button
        type="button"
        onClick={() => {
          nookies.destroy(null, 'SECRET_PASSWD')
          router.push('/')
        }}
      >
        Sair
      </Button>
    </Box>
  )
}

export function getStaticProps(ctx) {
  const MASTER_PASSWD = '1234'
  const cookies = nookies.get(ctx)

  {
    /** Cookies NÃO existem em build time */
  }
  console.log(`[static] Cookies`, cookies)

  return {
    props: {},
  }
}
