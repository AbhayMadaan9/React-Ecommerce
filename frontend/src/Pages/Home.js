import React from 'react'
import { ThemeProvider } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import {Products} from   '../components/Products'


const theme = {
  colors:{
    main: "#c5aae8",
    announce: 'teal',
    card: '#dbddea'
  },
  media:{
    sm: 807,
    md: 900,
    lg: 1200,
    xl: 1536
  }

}
export const Home = () => {
  return (
    <>
     <ThemeProvider theme={theme}>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
    </ThemeProvider>
    </>
  )
}
