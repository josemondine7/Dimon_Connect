import { Link } from 'react-router-dom'
import { Heart, MessageCircle, User, ChevronRight } from 'lucide-react'
import { useRecommend } from '../context/RecommendContext'

export default function FeedCard({ service }) {
  const { recordView, recordLike } = useRecommend()

  const handleClick = () => {
    recordView(service)
  }

  return (
    <div className="card-feed snap-start flex-shrink-0 w-full max-w-md mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
      
      <div className="relative z-20 h-full flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-200 mb-4 line-clamp-2">{service.description}</p>
        
        <p className="text-3xl font-bold text-dimon-bright mb-2">${service.price} USD</p>
        <p className="text-sm text-gray-300 mb-4">📍 {service.city}, {service.country}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User size={16} className="text-dimon-bright" />
            <span className="text-sm">{service.author?.name || 'Usuario'}</span>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => recordLike(service._id)}
              className="flex flex-col items-center"
            >
              <Heart size={24} className="hover:fill-white transition-all" />
            </button>
            <Link to={`/chat/${service.author?._id}`} className="flex flex-col items-center">
              <MessageCircle size={24} />
            </Link>
          </div>
        </div>
        
        <Link 
          to={`/services/${service._id}`}
          onClick={handleClick}
          className="mt-4 w-full bg-white text-dimon-dark py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-dimon-bright hover:text-white transition-all"
        >
          Ver Detalle <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  )
}
