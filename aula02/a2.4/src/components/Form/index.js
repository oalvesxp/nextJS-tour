import { useRouter } from 'next/router'
import nookies from 'nookies'
import React from 'react'
import style from './Form.module.css'
import Button from '../Button'

export default function Form() {
  const [passwd, setPasswd] = React.useState()
  const router = useRouter()

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          if (passwd) {
            nookies.set(null, 'SECRET_PASSWD', passwd, {
              maxAge: 30 * 24 * 60 * 60,
              path: '/',
            })

            router.push('/private')
          } else {
            alert('Senha incorreta!')
          }
        }}
      >
        {/** Campo do formulário*/}
        <label className={style.label} htmlFor="passwd">
          Qual a senha secreta?
        </label>
        <input
          className={style.input}
          type="password"
          name="passwd"
          id="passwd"
          onChange={(e) => setPasswd(e.target.value)}
        />

        <Button type="submit">Acessar</Button>
      </form>
    </>
  )
}
