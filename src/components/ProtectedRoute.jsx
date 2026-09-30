import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute() {
  const { user, loading } = useAuth()
  
  if (loading) {
    return <div className="flex items-center justify-center py-20">Cargando...</div>
  }
  
  return user ? <Outlet /> : <Navigate to="/login" />
}
