import React, { useState, useEffect } from 'react'

export default function HomePage() {
  /** Variables useState */
  const [input, setInput] = useState('')
  const [task, setTask] = useState([])

  /** When page is loaded */
  useEffect(() => {
    const sotrageTasks = localStorage.getItem('@tasks')
    if (sotrageTasks) setTask(JSON.parse(sotrageTasks))
  }, [])

  /** When taks is modified */
  useEffect(() => {
    localStorage.setItem('@tasks', JSON.stringify(task))
  }, [task])

  /** Hydrate Task */
  function handleRegister(e) {
    e.preventDefault()
    setTask([...task, input])
    setInput('')
  }

  return (
    <>
      <div className="form__container">
        <h1>Cadastro de tarefas</h1>

        <form onSubmit={handleRegister} className="form__controller">
          <div className="form__controller_field">
            <label htmlFor="name">Nova tarefa</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
            {task.map((item) => (
              <tr key={item}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
