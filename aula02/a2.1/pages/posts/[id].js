import NextLink from 'next/link'
import { Box, Text } from '@skynexui/components'
import { useRouter } from 'next/router'
import data from '../../data.json'

export const getStaticPaths = async () => {
  const paths = data.posts.map((current) => {
    return { params: { id: `${current.id}` } }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const post = data.posts.find((current) => {
    if (current.id === id) return true
  })

  return {
    props: {
      id: context.params.id,
      title: `${post.title}`,
      date: `${post.date}`,
      content: `${post.content}`,
    },
  }
}

export default function PostByIdScreen(props) {
  const router = useRouter()
  const post = {
    title: `${props.title}`,
    date: `${props.date}`,
    content: `${props.content}`,
  }

  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '700px',
        paddingHorizontal: '16px',
      }}
    >
      {/* Cabeçalho */}
      <Text
        variant="heading2"
        tag="h1"
        styleSheet={{
          color: '#F9703E',
          justifyContent: 'center',
          fontSize: '28px',
          lineHeight: '1.2',
        }}
      >
        {post.title}
      </Text>
      <Text
        styleSheet={{
          color: '#F9703E',
          justifyContent: 'center',
          borderBottom: '1px solid #F9703E',
          paddingVertical: '16px',
          marginVertical: '16px',
        }}
      >
        {post.date}
      </Text>

      {/* Área de Conteudo */}
      <Box
        styleSheet={{
          flexDirection: 'column',
        }}
      >
        <Text>{post.content}</Text>

        {post.video && (
          <iframe
            style={{ marginTop: '32px', minHeight: '400px' }}
            src={post.video}
          />
        )}
      </Box>

      {/* Rodapé */}
      <Box
        styleSheet={{
          marginTop: '16px',
          paddingVertical: '16px',
          borderTop: '1px solid #F9703E',
          color: '#F9703E',
        }}
      >
        <NextLink href="/" passHref>
          <Text tag="a" styleSheet={{ hover: { textDecoration: 'underline' } }}>
            Voltar para a home
          </Text>
        </NextLink>
      </Box>
    </Box>
  )
}
