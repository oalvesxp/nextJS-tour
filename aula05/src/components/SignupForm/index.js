import React from 'react'

export const SignupForm = () => {
  return (
    <div className="form__container">
      <h1>Cadastro de usuário</h1>

      <form className="form__controller">
        <div className="form__controller_field">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" required />
        </div>

        <div className="form__controller_field">
          <label htmlFor="email">e-Mail</label>
          <input type="email" id="email" required />
        </div>

        <div className="form__controller_field">
          <label htmlFor="age">Idade</label>
          <input type="number" id="age" required />
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}
