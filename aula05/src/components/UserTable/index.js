import React from 'react'

export const UserTable = () => {
  return (
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
  )
}
