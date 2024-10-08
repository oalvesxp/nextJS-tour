import React, { useState } from 'react'

export default function HomePage() {
  const [task, setTask] = useState('')

  const [list, setList] = useState({})

  function handleRegister(e) {
    e.preventDefault()

    alert('Cadastro realizado com sucesso!')

    setList({
      item: task,
    })
  }

  return (
    <>
      <div className="form__container">
        <h1>Cadastro de tarefas</h1>

        <form onSubmit={handleRegister} className="form__controller">
          <div className="form__controller_field">
            <label htmlFor="name">Nova tarefa</label>
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              id="name"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <button type="submit">Registrar</button>
        </form>
      </div>
      <div className="table-container">
        <table className="table__control">
          <thead>
            <tr>
              <th>Tarefas Registradas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{list.item}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
