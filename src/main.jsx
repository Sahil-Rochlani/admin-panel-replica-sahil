import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AdminPanelProvider } from './context/AdminPanelContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminPanelProvider>
      <App />
    </AdminPanelProvider>
  </StrictMode>,
)
