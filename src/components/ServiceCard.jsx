import { Link } from 'react-router-dom'
import { MapPin, User } from 'lucide-react'
import { useRecommend } from '../context/RecommendContext'

export default function ServiceCard({ service }) {
  const { recordView } = useRecommend()

  return (
    <Link 
      to={`/services/${service._id}`}
      onClick={() => recordView(service)}
      className="block"
    >
      <div className="card h-full">
        <h3 className="text-xl font-bold text-dimon-dark mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
        <p className="text-2xl font-bold text-dimon-mid mb-2">${service.price} USD</p>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <MapPin size={14} /> {service.city}, {service.country}
        </p>
        <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
          <User size={12} /> {service.author?.name || 'Usuario'}
        </p>
      </div>
    </Link>
  )
}
