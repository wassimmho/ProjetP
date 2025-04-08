import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FAQ from './website/FAQ.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FAQ />
    
  </StrictMode>,
)
