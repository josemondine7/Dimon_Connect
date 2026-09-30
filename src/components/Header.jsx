import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LangSelector from './LangSelector'
import { MessageCircle, User, LogOut, LayoutGrid, Home, PlusCircle } from 'lucide-react'

export default function Header({ lang, onLangChange }) {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white border-b border-dimon-soft/30 sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/img/logo.svg" alt="Dimon Connect" className="h-10 w-auto" />
          <div>
            <span className="font-bold text-dimon-dark text-xl">Dimon</span>
            <span className="font-bold text-dimon-light text-xl"> Connect</span>
            <p className="text-xs text-dimon-mid italic">Servicios Auttónomos</p>
          </div>
        </Link>

        <nav className="flex items-center gap-3 flex-wrap">
          <Link to="/" className="flex items-center gap-1 text-sm font-medium hover:text-dimon-mid">
            <Home size={16} /> Inicio
          </Link>
          <Link to="/feed" className="flex items-center gap-1 text-sm font-medium hover:text-dimon-mid">
            <LayoutGrid size={16} /> Descubrir
          </Link>
          <Link to="/services" className="text-sm font-medium hover:text-dimon-mid">Servicios</Link>
          
          {user ? (
            <>
              <Link to="/publish" className="flex items-center gap-1 text-sm font-medium hover:text-dimon-mid">
                <PlusCircle size={16} /> Publicar
              </Link>
              <Link to="/profile" className="flex items-center gap-1 text-sm font-medium hover:text-dimon-mid">
                <User size={16} /> {user.name.split(' ')[0]}
              </Link>
              <button onClick={logout} className="text-red-500 hover:text-red-600">
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-outline text-sm py-2 px-4">Ingresar</Link>
              <Link to="/register" className="btn-primary text-sm py-2 px-4">Registrarse</Link>
            </>
          )}
          
          <LangSelector current={lang} onChange={onLangChange} />
        </nav>
      </div>
    </header>
  )
}
