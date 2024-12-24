import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <nav>
        <Link to="/auth/register">No tienes cuenta? Registrate</Link>
      </nav>
    </>
  )
}
