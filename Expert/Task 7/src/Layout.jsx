import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Skills from './pages/Skills'

function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Skills />
    </>
  )
}

export default Layout