import { useLayoutEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@components'
import { Home, Profile, EditProfile, Chat } from './pages'

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
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
