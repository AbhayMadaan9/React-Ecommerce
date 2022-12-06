import React, {useState} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import themes from '../theme'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system'
import { Add, Remove } from '@mui/icons-material'
import { Button } from '@mui/material'

const Container = styled.div`
margin: 50px;
padding: 30px;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
`
const Image_container = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`
const Info_container = styled.div`
flex: 1;
padding: 0 50px;
`
const Title = styled.h1`
font-weight: 400;
`
const Desc = styled.p`
margin: 20px 0px;
word-spacing: 2px;
font-size: large;
`
const Price = styled.span`
font-weight: 100;
font-size: 30px;
`
const Filter_container = styled.div `
display: flex;
justify-content: space-between;
width: 50%;
margin: 20px 0px;
`
const Filter = styled.div`
display: flex;
align-items: center;
flex: 3;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
`

const AmountContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
`
const Amount = styled.span``
export const Product = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <ThemeProvider theme={themes}>
        <Announcement/>
    <Navbar/>
    <Container>
        <Image_container>
            <Image src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        </Image_container>
        <Info_container>
            <Title>{age}</Title>
            <Desc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus aperiam harum nulla sint laborum, quisquam, illo magni ratione, nesciunt tempora autem laudantium ullam accusantium eius. Soluta aspernatur voluptas neque corrupti?
            </Desc>
            <Price>Rs. 10, 000</Price>
            <Filter_container>
              <Filter>
                <FilterText>Color</FilterText>
                <FilterColor color='black'></FilterColor>
                <FilterColor color='gray'></FilterColor>
                <FilterColor color='blue'></FilterColor>
              </Filter>
                <Box sx={{ minWidth: 120, marginLeft: '50px', }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem>XS</MenuItem>
          <MenuItem>S</MenuItem>
          <MenuItem>M</MenuItem>
          <MenuItem>L</MenuItem>
          <MenuItem>XL</MenuItem>
        </Select>
      </FormControl>
    </Box>
            </Filter_container>
        </Info_container>
        {/* <AmountContainer>
          <Remove/>
          <Amount>1</Amount>
          <Add/>
        </AmountContainer>
        */}
        <Button variant='contained' color="default">
          ADD TO CART
        </Button> 
    </Container>
    </ThemeProvider>
  )
}
