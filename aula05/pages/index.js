import React, { useState } from 'react'

export default function HomePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)

  const [user, setUser] = useState({})

  function handleRegister(e) {
    e.preventDefault()

    setUser({
      userName: name,
      userMail: email,
      userAge: age,
    })
    alert('registrado')
  }

  return (
    <>
      <div className="form__container">
        <h1>Cadastro de usuário</h1>

        <form onSubmit={handleRegister} className="form__controller">
          <div className="form__controller_field">
            <label htmlFor="name">Nome</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="form__controller_field">
            <label htmlFor="email">e-Mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="email@xpto.com.br"
              required
            />
          </div>

          <div className="form__controller_field">
            <label htmlFor="age">Idade</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              id="age"
              required
            />
          </div>

          <button type="submit">Registrar</button>
        </form>
      </div>
      <div className="table-container">
        <h2>Lista de registros</h2>
        <table className="table__control">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.userName}</td>
              <td>{user.userMail}</td>
              <td>{user.userAge}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
