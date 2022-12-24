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
// const Filter = styled.div`
// min-width: 20rem;
// height: fit-content;
// border-radius: 1rem;
// box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
// margin-top: 7rem;
// `
const Filter = styled.div`
  margin: 20px;
  ${small_devices({width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${small_devices({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${small_devices({ margin: "10px 0px" })}
`;
const Option = styled.option``;




export const Product_list = () => {
  const location = useLocation().search;
  const cat = new URLSearchParams(location).get('category')
  const [filters, setfilters] = useState({})
  const [sorts, setsorts] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setfilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (

    <ThemeProvider theme={themes}>
      <Announcement />
      <Navbar />
      <Container>
        <Filter>
        <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Products filters = {filters} sorts = {sorts} cat = {cat}/>
        <Filter>
        <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setsorts(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </Container>
      <Newsletter />
      <Footer />
    </ThemeProvider>
  )
}
