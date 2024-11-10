import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { appRoutes } from './routes/AppRoutes';
import './language/i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={appRoutes}></RouterProvider>
  </StrictMode>,
)
