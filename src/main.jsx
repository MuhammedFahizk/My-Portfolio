/* global dataLayer */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ✅ Google Analytics setup
if (import.meta.env.VITE_GA_ID) {
  const script = document.createElement("script");
  script.setAttribute("async", "true");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", import.meta.env.VITE_GA_ID);
}

// ✅ React App Mount
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
