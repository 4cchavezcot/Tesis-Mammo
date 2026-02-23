import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Elemento raíz no encontrado: asegúrese de que exista un elemento con id="root" en index.html')
}

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)