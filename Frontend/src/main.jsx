import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Este BrowserRouter envuelve toda la aplicación */}
      <App />
    </BrowserRouter>
  </StrictMode>
);