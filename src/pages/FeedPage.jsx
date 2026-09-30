import { useState, useEffect, useRef } from 'react'
import FeedCard from '../components/FeedCard'

export default function FeedPage({ lang }) {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)

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

  const scrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  if (loading) return <p className="text-center py-20">Cargando...</p>

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-dimon-dark">✨ Descubrir</h2>
      <p className="text-center text-gray-500 text-sm mb-6">Deslizá para ver más</p>
      
      <div 
        ref={containerRef}
        className="h-[75vh] overflow-y-auto snap-y snap-mandatory scroll-smooth space-y-4 pb-10"
      >
        {services.length === 0 ? (
          <p className="text-center py-20 text-gray-500">Aún no hay servicios. ¡Sé el primero!</p>
        ) : (
          services.map(service => (
            <FeedCard key={service._id} service={service} />
          ))
        )}
      </div>
      
      <button 
        onClick={scrollDown}
        className="fixed bottom-6 right-6 bg-dimon-mid text-white p-3 rounded-full shadow-lg hover:bg-dimon-light transition-all"
      >
        ↓
      </button>
    </div>
  )
}
