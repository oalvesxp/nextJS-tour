import React, { useState, useEffect } from 'react'
import { Container } from '../components/ui/Container'

function Page() {
  const [nutri, setNutri] = useState([])

  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json)
        })
    }

    loadApi()
  }, [])

  return (
    <>
      <Container>
        <header>
          <strong>Next Nutri</strong>
        </header>
        <main>
          {nutri.map((item) => (
            <div key={item.id} className="container__post">
              <article className="post">
                <h2 className="post__title">{item.titulo}</h2>
                <img
                  src={item.capa}
                  alt={item.titulo}
                  className="post__cover"
                />
                <p className="post__subtitle">{item.subtitulo}</p>
                <a href="#" className="post__button">
                  Acessar
                </a>
              </article>
            </div>
          ))}
        </main>
      </Container>
    </>
  )
}

export default Page
