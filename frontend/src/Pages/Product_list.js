import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'
import themes from '../theme'
import { Products } from '../components/Products'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Divider, Button } from '@mui/material'
import Slider from '@mui/material/Slider';
import { Numbers } from '@mui/icons-material'
import { alignProperty } from '@mui/material/styles/cssUtils'
import { small_devices } from '../responsive'
import { color } from '@mui/system'



const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: nowrap;
${small_devices({ "flex-wrap": "wrap" })}
`
const Title = styled.h2`
font-weight: 400;
`
const FilterContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Filter = styled.div`
min-width: 20rem;
height: fit-content;
border-radius: 1rem;
box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
margin-top: 7rem;

`
const FilterText = styled.h1`
font-size: 20px;
font-weight: 600;
text-align: center;
`
const Lists = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`
const marks = [
  {
    value: 0,
    label: 'Rs 0',
  },
  {
    value: 200,
    label: 'Rs 200',
  },
  {
    value: 370,
    label: 'Rs 370',
  },
  {
    value: 1000,
    label: 'Rs 1000',
  },
];
function valuetext(value) {
  return `Rs ${value}`;
}


export const Product_list = () => {
  const location = useLocation().search;
  //const cat = location.pathname.split("/")[2]
  const cat = new URLSearchParams(location).get('category')
  console.log(cat)
  const [colors, setcolors] = useState([])
  const [brands, setbrands] = useState([])
  const [sorts, setsorts] = useState([])
  const handle_color = (e) => {
    e.preventDefault();
    const value = e.target.value
    setcolors(
      colors.concat([e.target.value])
) 

  }
  const handle_brand = (e) => {
    e.preventDefault();
    const value = e.target.value
    setbrands(
      brands.concat([e.target.value])
) 
  
  }
  const handle_sort = (e) => {
    e.preventDefault();
    const value = e.target.value
    setsorts(
      sorts.concat([e.target.value])
) 
  }
  return (

    <ThemeProvider theme={themes}>
      <Announcement />
      <Navbar />
      <Container>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Title>Color</Title>
          <FormGroup>
            <Lists>
              <FormControlLabel control={<Checkbox />} label="Black" value='black' onChange={handle_color} />
              <FormControlLabel control={<Checkbox />} label="Orange" value='orange' onChange={handle_color} />
              <FormControlLabel control={<Checkbox />} label="Orange" value='green' onChange={handle_color} />
              <FormControlLabel control={<Checkbox />} label="Orange" value='blue' onChange={handle_color} />
              <FormControlLabel control={<Checkbox />} label="Orange" value='gray' onChange={handle_color} />
              <FormControlLabel control={<Checkbox />} label="Orange" value='white' onChange={handle_color} />
            </Lists>
          </FormGroup>
          <Divider />
          <Title>Brands</Title>
          <Lists>
            <FormControlLabel control={<Checkbox />} label="Gucci" value='gucci' onChange={handle_brand}/>
            <FormControlLabel control={<Checkbox />} label="Nike" value='nike' onChange={handle_brand}/>
            <FormControlLabel control={<Checkbox />} label="Puma" value='puma' onChange={handle_brand}/>
            <FormControlLabel control={<Checkbox />} label="Red Tape" value='red tape' onChange={handle_brand}/>
            <FormControlLabel control={<Checkbox />} label="Fort Collins" value='fort collins' onChange={handle_brand}/>
            <FormControlLabel control={<Checkbox />} label="H&M" value='H&M' onChange={handle_brand}/>
          </Lists>
        </Filter>
        <Products colors={colors} brands = {brands} sorts = {sorts} cat = {cat}/>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Title>Price Range</Title>
          <FormGroup onChange={handle_sort}>
            <Lists>
              <FormControlLabel control={<Checkbox />} label="100-500" value='100-500' onChange={handle_sort} />
              <FormControlLabel control={<Checkbox />} label="100-500" value='100-500' onChange={handle_sort} />
              <FormControlLabel control={<Checkbox />} label="1000-5000" value='1000-5000' onChange={handle_sort} />
              <FormControlLabel control={<Checkbox />} label="5000-10000" value='5000-10000' onChange={handle_sort} />
              <FormControlLabel control={<Checkbox />} label="10000-50000" value='10000-50000' onChange={handle_sort} />
              <FormControlLabel control={<Checkbox />} label="50000-100000" value='50000-100000' onChange={handle_sort} />
            </Lists>
          </FormGroup>
          <Divider />
          <Lists>
            <FormControlLabel control={<Checkbox />} label="Newest" value='newest' onChange={handle_sort}/>
            <FormControlLabel control={<Checkbox />} label="Older" value='older' onChange={handle_sort}/>
          </Lists>
        </Filter>
      </Container>
      <Newsletter />
      <Footer />
    </ThemeProvider>
  )
}
