import React, { useState } from 'react'

export default function HomePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)

  return (
    <>
      <div className="form__container">
        <h1>Cadastro de usuário</h1>

        <form className="form__controller">
          <div className="form__controller_field">
            <label htmlFor="name">Nome</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
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
              <td>Fulado de Tal</td>
              <td>15 anos</td>
              <td>teste@teste.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
