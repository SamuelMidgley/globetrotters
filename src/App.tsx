import { useLayoutEffect } from 'react'
import './App.css'
import { Header, Profile } from '@components'

function App() {
  useLayoutEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme) {
      const htmlElement = document.querySelector('html')
      if (htmlElement) {
        htmlElement.className = theme
      }
    }
  }, [])

  return (
    <>
      <Header />
      <Profile />
    </>
  )
}

export default App
