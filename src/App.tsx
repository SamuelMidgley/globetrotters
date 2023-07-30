import { useLayoutEffect } from 'react'
import './App.css'
import { Header } from '@components'
import { Profile } from './pages/profile'
import { EditProfile } from './pages/edit-profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'

function App() {
  useLayoutEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme) {
      const htmlElement = document.querySelector('html')
      if (htmlElement) {
        htmlElement.className = theme
      }
      return
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      const htmlElement = document.querySelector('html')
      if (htmlElement) {
        htmlElement.className = 'dark'
      }
      window.localStorage.setItem('theme', 'dark')
    }
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/edit/:id" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
