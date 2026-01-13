import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { TransitionProvider } from './modules/app/hooks/usePageTransition.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <TransitionProvider>
      <App />
    </TransitionProvider>
    </BrowserRouter>
  </StrictMode>,
)
