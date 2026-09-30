export default function LegalPage({ lang }) {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-dimon-dark mb-8 text-center">Términos Legales y Condiciones</h1>

      <div className="space-y-8 text-gray-700">
        <section className="card">
          <h2 className="text-xl font-bold text-dimon-mid mb-3">1. Identidad del Titular</h2>
          <p><strong>Dimon Connect</strong></p>
          <p>Titular: José María Mondine Lemos</p>
          <p>Documento: 43433929</p>
          <p>Correo: josemondine723@gmail.com</p>
          <p>Ubicación: Montevideo, Uruguay</p>
        </section>

        <section className="card">
          <h2 className="text-xl font-bold text-dimon-mid mb-3">2. Naturaleza de la Plataforma</h2>
          <p>Dimon Connect es una plataforma de intermediación técnica que pone en contacto a personas físicas que ofrecen servicios con personas que los requieren.</p>
          <p className="mt-2"><strong>No somos empleadores ni parte del contrato:</strong> La relación se establece directamente entre los usuarios. La plataforma facilita el encuentro, la comunicación y el procesamiento de pagos, pero no ejecuta los servicios ni asume obligaciones contractuales por las partes.</p>
        </section>

        <section className="card">
          <h2 className="text-xl font-bold text-dimon-mid mb-3">3. Comisión y Tarifas</h2>
          <p>Por cada transacción concretada a través de la plataforma, se aplica una comisión del <strong>10%</strong> sobre el valor del servicio.</p>
          <ul className="mt-2 space-y-2 ml-5 list-disc">
            <li>La comisión se calcula sobre el precio acordado</li>
            <li>Se informa antes de confirmar el pago</li>
            <li>Es el ingreso que sostiene el funcionamiento y mejora de la plataforma</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="text-xl font-bold text-dimon-mid mb-3">4. Sistema de Garantía</h2>
          <p>Cuando se acuerda pago posterior a la prestación del servicio, se aplica un depósito de garantía adicional del <strong>10%</strong>:</p>
          <ul className="mt-2 space-y-2 ml-5 list-disc">
            <li>✅ Si el servicio se cumple: la garantía se devuelve íntegramente</li>
            <li>❌ Si el contratante no cumple con el pago: la garantía se transfiere al oferente como compensación</li>
            <li>❌ Si el oferente no cumple: se devuelve el importe total abonado</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="text-xl font-bold text-dimon-mid mb-3">5. Protección de Datos</h2>
          <p>Los datos personales proporcionados se almacenan de forma segura y cifrada. No se ceden, venden ni comparten con terceros para fines comerciales.</p>
          <p className="mt-2">Cada usuario puede solicitar la eliminación de su cuenta y sus datos en cualquier momento.</p>
        </section>

        <section className="card">
          <h2 className="text-xl font-bold text-dimon-mid mb-3">6. Libertad de Comercio</h2>
          <p>Esta plataforma ampara el ejercicio del libre comercio y la autonomía de la voluntad de las personas. Cada usuario es responsable de verificar la veracidad de los datos y la idoneidad de la contraparte con quien contrata.</p>
        </section>

        <p className="text-center text-sm text-gray-500 mt-8">
          Última actualización: Septiembre 2026 — Plataforma en funcionamiento
        </p>
      </div>
    </div>
  )
}
