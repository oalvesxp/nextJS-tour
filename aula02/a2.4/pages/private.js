import { useRouter } from 'next/router'
import nookies from 'nookies'
import Box from '../src/components/Box'
import Button from '../src/components/Button'

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const SECRET_PASSWD = '1234'
  const passwd = cookies.SECRET_PASSWD
  const isAuth = SECRET_PASSWD === passwd

  if (!isAuth) {
    console.log('401 - Unauthorized')
    return {
      redirect: {
        permanent: false,
        destination: '/?status=401',
      },
    }
  }

  console.log('Autorizado!')
  return { props: {} }
}

export default function PrivateScreen(props) {
  const router = useRouter()

  return (
    <>
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
    </>
  )
}
