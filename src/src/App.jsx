import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import LegalModal from './components/LegalModal'
import HomePage from './pages/HomePage'
import WhatIsPage from './pages/WhatIsPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import PublishPage from './pages/PublishPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import PaymentsPage from './pages/PaymentsPage'
import ChatPage from './pages/ChatPage'
import FeedPage from './pages/FeedPage'
import LegalPage from './pages/LegalPage'
import AdminPage from './pages/AdminPage'

function App() {
  const [lang, setLang] = useState('es')
  const [showLegal, setShowLegal] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('dimon_lang')
    if (savedLang) setLang(savedLang)
    
    const accepted = localStorage.getItem('dimon_legal_accepted')
    if (!accepted) setShowLegal(true)
  }, [])

  const changeLang = (newLang) => {
    setLang(newLang)
    localStorage.setItem('dimon_lang', newLang)
  }

  const acceptLegal = () => {
    localStorage.setItem('dimon_legal_accepted', new Date().toISOString())
    setShowLegal(false)
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header lang={lang} onLangChange={changeLang} />
        {showLegal && <LegalModal onAccept={acceptLegal} />}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/feed" element={<FeedPage lang={lang} />} />
            <Route path="/whatis" element={<WhatIsPage lang={lang} />} />
            <Route path="/services" element={<ServicesPage lang={lang} />} />
            <Route path="/services/:id" element={<ServiceDetailPage lang={lang} />} />
            <Route path="/legal" element={<LegalPage lang={lang} />} />
            <Route path="/login" element={<LoginPage lang={lang} />} />
            <Route path="/register" element={<RegisterPage lang={lang} />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/publish" element={<PublishPage lang={lang} />} />
              <Route path="/profile" element={<ProfilePage lang={lang} />} />
              <Route path="/payments" element={<PaymentsPage lang={lang} />} />
              <Route path="/chat/:id" element={<ChatPage lang={lang} />} />
              <Route path="/admin" element={<AdminPage lang={lang} />} />
            </Route>
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  )
}

export default App
