import { useState, useEffect } from 'react'
import ServiceCard from '../components/ServiceCard'

export default function ServicesPage({ lang }) {
  const [services, setServices] = useState([])
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const filtered = services.filter(s =>
    s.title.toLowerCase().includes(filter.toLowerCase()) ||
    s.description.toLowerCase().includes(filter.toLowerCase()) ||
    (s.city && s.city.toLowerCase().includes(filter.toLowerCase())) ||
    (s.country && s.country.toLowerCase().includes(filter.toLowerCase())) ||
    (s.category && s.category.toLowerCase().includes(filter.toLowerCase()))
  )

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6 text-dimon-dark">Servicios Disponibles</h2>
      
      <input
        type="text"
        placeholder="🔍 Buscar por nombre, ciudad, país o categoría..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="input-field max-w-xl mx-auto block mb-8"
      />

      {loading ? (
        <p className="text-center py-10">Cargando servicios...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No se encontraron servicios. ¡Sé el primero en publicar uno!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}
