import { Link } from 'react-router-dom'

export default function WhatIsPage({ lang }) {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-dimon-dark mb-2 text-center">¿Qué es Dimon Connect?</h1>
      <p className="text-center text-dimon-mid italic text-xl mb-10">Servicios Auttónomos</p>

      <div className="space-y-6">
        <div className="card">
          <h3 className="text-xl font-bold text-dimon-mid mb-3">🌐 Conectando al mundo</h3>
          <p>Dimon Connect es una plataforma global donde personas de cualquier país pueden ofrecer o contratar servicios. No hay fronteras: buscá por ciudad, país o el mundo entero.</p>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold text-dimon-mid mb-3">💰 Sistema de pagos y garantías</h3>
          <ul className="space-y-2 mt-2">
            <li><strong>Comisión 10%:</strong> Se descuenta automáticamente en cada transacción exitosa. Es el sustento de la plataforma.</li>
            <li><strong>Pago anticipado:</strong> Pagás antes de que empiece el trabajo → 100% seguro para ambos.</li>
            <li><strong>Garantía 10%:</strong> Si acordás pagar después, dejás un 10% adicional en garantía. Si cumplís, no se cobra. Si no cumplís, protege al otro.</li>
            <li><strong>Protección mutua:</strong> Si el oferente no cumple, se devuelve el dinero. Si el contratante no paga, la garantía compensa al oferente.</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold text-dimon-mid mb-3">🧠 ¿Cómo funciona lo que te gusta?</h3>
          <p>La plataforma aprende de lo que ves. Cuando mirás un servicio, el sistema registra:</p>
          <ul className="space-y-1 mt-2 ml-5 list-disc">
            <li>Qué categorías te interesan</li>
            <li>De qué ciudades y países mirás más</li>
            <li>Qué servicios marcás como favoritos</li>
          </ul>
          <p className="mt-2">Con eso, te muestra primero lo que más probablemente te interese. Vos enseñás a la plataforma y ella te muestra mejor contenido.</p>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold text-dimon-mid mb-3">⚖️ Todo es legal y transparente</h3>
          <p>Dimon Connect es un espacio de encuentro entre personas. No somos empleadores ni representantes de nadie. Cada usuario actúa por su cuenta.</p>
          <p className="mt-2">Las reglas están claras:</p>
          <ul className="space-y-1 mt-2 ml-5 list-disc">
            <li>Libertad de acordar condiciones entre partes</li>
            <li>Transparencia en costos: sabés cuánto pagás y para qué</li>
            <li>Protección de datos personales: tu información está resguardada</li>
            <li>Comisión pública y conocida desde el inicio</li>
          </ul>
          <p className="mt-4">
            <Link to="/legal" className="text-dimon-mid font-semibold hover:underline">
              Leer términos legales completos →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
