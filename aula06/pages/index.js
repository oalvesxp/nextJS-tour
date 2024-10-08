import React, { useState, useEffect } from 'react'

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
      <div className="container">
        <header>
          <strong>Next Nutri</strong>
        </header>
        <main>
          {nutri.map((item) => (
            <article key={item.id} className="post">
              <h2 className="post__title">{item.titulo}</h2>
              <img src={item.capa} alt={item.titulo} className="post__cover" />
              <p className="post__subtitle">{item.subtitulo}</p>
              <a href="#" className="button">
                Acessar
              </a>
            </article>
          ))}
        </main>
      </div>
    </>
  )
}

export default Page
