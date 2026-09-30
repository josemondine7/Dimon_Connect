import { Link } from 'react-router-dom'

export default function Footer({ lang }) {
  return (
    <footer className="bg-dimon-dark text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <div className="flex justify-center items-center gap-3 mb-4">
          <img src="/img/logo.svg" alt="Dimon Connect" className="h-10 w-auto" />
          <div>
            <span className="font-bold text-xl">Dimon</span>
            <span className="font-bold text-dimon-light text-xl"> Connect</span>
          </div>
        </div>
        
        <p className="text-dimon-soft italic">Servicios Auttónomos — Conectando personas en todo el mundo</p>
        
        <div className="text-sm space-y-1 text-gray-300">
          <p><strong>Creador:</strong> José María Mondine Lemos — Documento: 43433929</p>
          <p><strong>Contacto:</strong> josemondine723@gmail.com</p>
          <p>Montevideo, Uruguay — Plataforma operativa desde 2026</p>
        </div>
        
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/legal" className="text-dimon-light hover:underline">Términos y Legal</Link>
          <span>Comisión 10% por transacción</span>
          <span>Garantía 10% de protección</span>
        </div>
        
        <p className="text-xs text-gray-400 mt-4">
          © 2026 Dimon Connect — Todos los derechos reservados. Plataforma de encuentro, no empleador ni intermediario.
        </p>
      </div>
    </footer>
  )
}
