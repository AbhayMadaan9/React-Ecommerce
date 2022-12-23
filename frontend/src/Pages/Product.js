import React, {useState, useEffect} from 'react'
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
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'

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
display: flex;
align-items: center;
`

const Amount = styled.span`
font-size: xx-large;
`
const Icon = styled.div`
cursor: pointer;
`
export const Product = () => {
  const [age, setAge] = useState('');
  const [count, setcount] = useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // function change_count(operation){
  //   if(operation = "subtract") setcount(count=> count-1);
  //   else setcount(count=> count+1);
  // }
  const location = useLocation();
   const product_id = location.pathname.split("/")[2]
   const [productInfo, setproductInfo] = useState({})
   useEffect(() => {
   const info = async()=>{
    try {
      const res = await publicRequest.get("/product/"+product_id)
      setproductInfo(res.data);
    } catch (error) {
      
    }
   }
   info();
   }, [productInfo])
   console.log({productInfo})
  return (
    <ThemeProvider theme={themes}>
        <Announcement/>
    <Navbar/>
    <Container>
        <Image_container>
            <Image src={productInfo.img}/>
        </Image_container>
        <Info_container>
            <Title>{productInfo.title}</Title>
            <Desc>
              {productInfo.desc}
            </Desc>
            <Price>{productInfo.price}</Price>
            <Filter_container>
              <Filter>
                <FilterText>Color</FilterText>
                {productInfo.color?.map(item=>(
                  <FilterColor color={item} key={item}></FilterColor>
                ))}
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
            {productInfo.color?.map(item=>(
                  <MenuItem value={item} key={item}>XS</MenuItem>
                ))}
        </Select>
      </FormControl>
    </Box>
            </Filter_container>
            <AmountContainer>
              <Icon onClick={()=>{setcount((count > 1)? (count-1 ): 1)}}>
          <Remove fontSize='large'/>
          </Icon>
          <Amount>{count}</Amount>
          <Icon onClick={()=>{setcount((count <10)? (count+1 ): 10)}}>
          <Add fontSize='large'/>
          </Icon>
          <Button variant='contained' sx={{marginLeft: '10px'}}>
          ADD TO CART
        </Button> 
        </AmountContainer>
        </Info_container>       
        
    </Container>
    </ThemeProvider>
  )
}
