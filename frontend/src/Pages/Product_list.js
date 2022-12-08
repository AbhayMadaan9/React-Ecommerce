import React from 'react'
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


const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: nowrap;
${small_devices({"flex-wrap": "wrap"})}
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
    value: 20,
    label: 'Rs 20',
  },
  {
    value: 37,
    label: 'Rs 37',
  },
  {
    value: 100,
    label: 'Rs 100',
  },
];
function valuetext(value) {
  return `Rs ${value}`;
}


export const Product_list = () => {
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
            <FormControlLabel control={<Checkbox />} label="Black" />
            <FormControlLabel control={<Checkbox />} label="Orange" />
            <FormControlLabel control={<Checkbox />} label="Orange" />
            <FormControlLabel control={<Checkbox />} label="Orange" />
            <FormControlLabel control={<Checkbox />} label="Orange" />
            <FormControlLabel control={<Checkbox />} label="Orange" />
            </Lists>
          </FormGroup>
          <Divider/>
          <Title>Brands</Title>
            <Lists>
            <FormControlLabel control={<Checkbox />} label="Black" />
            <FormControlLabel control={<Checkbox />} label="Nike" />
            <FormControlLabel control={<Checkbox />} label="Puma" />
            <FormControlLabel control={<Checkbox />} label="Red Tape" />
            <FormControlLabel control={<Checkbox />} label="Fort Collins" />
            <FormControlLabel control={<Checkbox />} label="H&M" />
            </Lists>
            <Button variant="contained" color="primary" sx={{margin: '5% 0% 5% 0%', width: 'max-content'}}>Apply Changes</Button>
        </Filter>
        <Products />
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Title>Price</Title>
          <Slider
        aria-label="Custom marks"
        defaultValue={[10, 50]}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        sx = {{
          width: '20rem',
          margin: '2rem',
        }}
      />
      <Button variant="contained" color="primary" sx={{margin: '5% 0% 5% 30%', width: 'max-content'}}>Apply Changes</Button>
        </Filter>
      </Container>
      <Newsletter />
      <Footer />
    </ThemeProvider>
  )
}
