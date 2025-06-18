import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalProvider from './context/GlobalState.jsx' 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
)
