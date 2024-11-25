import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Router.jsx'
import { RouterProvider } from 'react-router-dom'
import 'animate.css';
import AuthProvider from './components/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
    
  
)
