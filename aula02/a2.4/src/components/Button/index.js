import style from './Button.module.css'

export default function Button({ children, type, onClick, ...props }) {
  return (
    <>
      <button className={style.button} type={type} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
