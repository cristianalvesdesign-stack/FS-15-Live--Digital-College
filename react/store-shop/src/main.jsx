import "./main.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';
import { RouterProvider } from 'react-router';
import { router } from './routes/index.jsx';

const primereact = {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'none',
    }
  },
  license: "eyJpZCI6IjRlN2Q4MDJiLTY2OTctNDM4Zi1iYWZlLWE3ZTNmYzMxNzc0OCIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTA4NjM4MTMsImV4cCI6MTgyMjM5OTgxM30.GsIxQfqGhM43Xf_Rt5PMndq91fH6dG8U3Tqi-p0Ujly1pvvXWfJbUSj036wWM0hJEuDp-iNsPWlDvwESLNIKDw"
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider  {...primereact}>
      <RouterProvider  router={router} />
    </PrimeReactProvider>
  </StrictMode>,
)
