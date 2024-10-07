export default function HomePage() {
  return (
    <>
      <div>
        <h1>Cadastro de usuário</h1>

        <form action="">
          <label htmlFor="name">Nome</label>
          <input type="text" />

          <label htmlFor="email">e-Mail</label>
          <input type="email" />

          <label htmlFor="age">Idade</label>
          <input type="number" />

          <button type="submit">Registrar</button>
        </form>
      </div>
    </>
  )
}
