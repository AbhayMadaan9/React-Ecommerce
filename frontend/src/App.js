import React from 'react'
import { ThemeProvider } from 'styled-components'
import Navbar from './Pages/Navbar'
export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
    </>
  )
}
