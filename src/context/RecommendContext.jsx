import { createContext, useContext, useState, useEffect } from 'react'

const RecommendContext = createContext()

export function RecommendProvider({ children }) {
  const [history, setHistory] = useState([])
  const [preferences, setPreferences] = useState({
    categories: {},
    cities: {},
    countries: {},
    viewed: [],
    liked: []
  })

  useEffect(() => {
    const saved = localStorage.getItem('dimon_preferences')
    if (saved) setPreferences(JSON.parse(saved))
  }, [])

  const savePreferences = (newPrefs) => {
    setPreferences(newPrefs)
    localStorage.setItem('dimon_preferences', JSON.stringify(newPrefs))
  }

  const recordView = (service) => {
    const newPrefs = { ...preferences }
    
    if (service.category) {
      newPrefs.categories[service.category] = (newPrefs.categories[service.category] || 0) + 1
    }
    if (service.city) {
      newPrefs.cities[service.city] = (newPrefs.cities[service.city] || 0) + 1
    }
    if (service.country) {
      newPrefs.countries[service.country] = (newPrefs.countries[service.country] || 0) + 1
    }
    newPrefs.viewed.unshift(service._id)
    if (newPrefs.viewed.length > 100) newPrefs.viewed.pop()
    
    savePreferences(newPrefs)
  }

  const recordLike = (serviceId) => {
    const newPrefs = { ...preferences }
    if (!newPrefs.liked.includes(serviceId)) {
      newPrefs.liked.unshift(serviceId)
      savePreferences(newPrefs)
    }
  }

  const getRecommendations = (allServices, limit = 10) => {
    if (!preferences.viewed.length) {
      return allServices.slice(0, limit)
    }

    const scored = allServices.map(service => {
      let score = 0
      
      if (preferences.categories[service.category]) {
        score += preferences.categories[service.category] * 3
      }
      if (preferences.cities[service.city]) {
        score += preferences.cities[service.city] * 2
      }
      if (preferences.countries[service.country]) {
        score += preferences.countries[service.country] * 1.5
      }
      if (!preferences.viewed.includes(service._id)) {
        score += 1
      }
      
      return { ...service, score }
    })

    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
  }

  return (
    <RecommendContext.Provider value={{
      preferences,
      recordView,
      recordLike,
      getRecommendations
    }}>
      {children}
    </RecommendContext.Provider>
  )
}

export function useRecommend() {
  return useContext(RecommendContext)
}
