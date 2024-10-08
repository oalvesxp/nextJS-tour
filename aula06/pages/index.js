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
          {nutri.map((item, index) => (
            <div key={index}>
              <h2>{item.titulo}</h2>
              <p>{item.subtitulo}</p>
            </div>
          ))}
        </main>
      </div>
    </>
  )
}

export default Page
