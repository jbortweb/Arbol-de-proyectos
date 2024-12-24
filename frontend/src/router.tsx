import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './views/Register'
import Login from './views/Login'
import AuthLayout from './layouts/AuthLayout'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
