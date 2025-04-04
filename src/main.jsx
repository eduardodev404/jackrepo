import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RoutesApp from "./routes"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesApp />
  </StrictMode>,
)
