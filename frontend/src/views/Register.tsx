import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
      <nav>
        <Link to="/auth/login">Ya tienes cuenta? Inicia sesión</Link>
      </nav>
    </>
  )
}
