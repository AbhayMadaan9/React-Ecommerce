import React from 'react'
import { ThemeProvider } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import {Products} from   '../components/Products'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
import themes from '../theme'
export const Home = () => {
  return (
    <>
     <ThemeProvider theme={themes}>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </ThemeProvider>
    </>
  )
}
