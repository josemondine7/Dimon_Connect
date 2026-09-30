import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { RecommendProvider } from './context/RecommendContext.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RecommendProvider>
        <App />
      </RecommendProvider>
    </AuthProvider>
  </React.StrictMode>
)
