import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Reset from './Login/Reset.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reset />
    
  </StrictMode>,
)
