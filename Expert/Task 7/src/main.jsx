// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Layout from './Layout.jsx'
import Beginner from './pages/Beginner.jsx'
import Intermediate from './pages/Intermediate.jsx'
import Advanced from './pages/Advanced.jsx'
import Expert from './pages/Expert.jsx'
import HeroSection from './components/HeroSection.jsx'

import Home from './pages/Home.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<HeroSection />} />
      <Route path='home' element={<Home />} />
      <Route path='beginner' element={<Beginner />} />
      <Route path='intermediate' element={<Intermediate />} />
      <Route path='advanced' element={<Advanced />} />
      <Route path='expert' element={<Expert />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
