import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Feature from './website/Features.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Feature />
    
  </StrictMode>,
)
