import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App2 from './App.jsx'
import './index-final.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2/>
  </StrictMode>,
)
