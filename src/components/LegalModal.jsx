import { Link } from 'react-router-dom'

export default function LegalModal({ onAccept }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-dimon-dark mb-4">Aviso Legal y Términos de Uso</h2>
        
        <div className="space-y-4 text-gray-700 text-sm">
          <p><strong>Dimon Connect</strong> — Plataforma de conexión entre personas que ofrecen y contratan servicios.</p>
          
          <p><strong>✅ Es legal:</strong> Esta plataforma opera bajo principios de libre asociación y comercio entre particulares. No somos empleadores ni intermediarios obligados, sino un espacio de encuentro.</p>
          
          <p><strong>💰 Comisiones:</strong> Se aplica una comisión del 10% sobre cada transacción exitosa como contraprestación por el uso de la plataforma.</p>
          
          <p><strong>🛡️ Garantías:</strong> El sistema de garantía del 10% es un mecanismo de protección mutua que se devuelve o se asigna según el cumplimiento acordado.</p>
          
          <p><strong>🔒 Protección de datos:</strong> Toda la información personal se almacena cifrada en base de datos con acceso restringido. No se vende ni cede a terceros.</p>
          
          <p><strong>📜 Responsabilidad:</strong> Las partes acuerdan directamente los términos del servicio. La plataforma facilita el contacto y el pago, pero no es parte del contrato entre usuarios.</p>
          
          <p className="text-dimon-mid">Al continuar, aceptás nuestros <Link to="/legal" className="underline font-semibold">Términos Completos</Link> y la Política de Privacidad.</p>
        </div>
        
        <button 
          onClick={onAccept}
          className="btn btn-primary w-full mt-6"
        >
          Aceptar y Continuar ✅
        </button>
      </div>
    </div>
  )
}
