import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecommend } from '../context/RecommendContext'
import ServiceCard from '../components/ServiceCard'

export default function HomePage({ lang }) {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const { getRecommendations } = useRecommend()

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        const recs = getRecommendations(data, 6)
        setServices(recs)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [getRecommendations])

  return (
    <div>
      <section className="text-center py-12 px-4">
        <img 
          src="/img/logo.svg" 
          alt="Dimon Connect" 
          className="h-32 w-auto mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="text-dimon-dark">Dimon</span>{' '}
          <span className="text-dimon-light">Connect</span>
        </h1>
        <p className="text-xl text-dimon-mid italic mb-6">Servicios Auttónomos</p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Conectando personas en todo el mundo. Encontrá o ofrecé servicios en tu ciudad, 
          tu país o el mundo entero. Publicá, contratá, chateá y pagá con seguridad.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/feed" className="btn btn-accent">📱 Descubrir (Estilo Feed)</Link>
          <Link to="/services" className="btn btn-primary">Ver Servicios</Link>
          <Link to="/register" className="btn btn-outline">Crear Cuenta</Link>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-dimon-dark">✨ Recomendados para vos</h2>
        {loading ? (
          <p className="text-center">Cargando...</p>
        ) : services.length === 0 ? (
          <p className="text-center text-gray-500">Sé el primero en publicar un servicio.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => <ServiceCard key={s._id} service={s} />)}
          </div>
        )}
        <p className="text-center mt-6">
          <Link to="/services" className="text-dimon-mid font-semibold hover:underline">
            Ver todos los servicios →
          </Link>
        </p>
      </section>
    </div>
  )
}
