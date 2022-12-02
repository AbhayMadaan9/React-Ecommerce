import React, {useState} from 'react'
import { ThemeProvider } from 'styled-components'
import Navbar from './Pages/Navbar'
import Announcement from './Pages/Announcement'
import Slider from './Pages/Slider'



const theme = {
  colors:{
    main: "#c5aae8",
    announce: 'teal',
  },
  media:{
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536

  }
}

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Announcement/>
      <Navbar/>
      <Slider/>
    </ThemeProvider>
    </>
  )
}
