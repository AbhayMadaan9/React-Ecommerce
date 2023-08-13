import React, { useState, useEffect } from 'react'
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
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'


const Container = styled.div`
padding: 30px;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
::-webkit-scrollbar{ width: 0}
`
const Image_container = styled.div`
flex: 1;
height: 350px;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
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
const Filter_container = styled.div`
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
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;
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
  const [size, setsize] = useState("L")
  const [color, setcolor] = useState("black")
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setsize(event.target.value);
  };
  // function change_count(operation){
  //   if(operation = "subtract") setcount(count=> count-1);
  //   else setcount(count=> count+1);
  // }
  const location = useLocation();
  const product_id = location.pathname.split("/")[2]
  const [productInfo, setproductInfo] = useState({})

  useEffect(() => {
    const info = async () => {
      try {
        const res = await publicRequest.get("/product/" + product_id)
        setproductInfo(res.data);
      } catch (error) {

      }
    }
    info();
  }, [product_id])

let price = productInfo.price; 
  const handleClick = () => {
    alert("Product added to cart successfully")
    dispatch(
      addProduct({...productInfo, count, price })
    );
   // console.log({count, color, size, ...productInfo})
  };
  // console.log(productInfo)
  return (
    <ThemeProvider theme={themes}>
      <Announcement />
      <Navbar />
      <Container>
        <Image_container>
          <Image src={productInfo.img} />
        </Image_container>
        <Info_container>
          <Title>{productInfo.title}</Title>
          <Desc>
            {productInfo.desc}
          </Desc>
          <Price>Rs.{productInfo.price}</Price>
          <Filter_container>
            <Filter>
              <FilterText>Color</FilterText>
              {productInfo.color?.map(item => (
                <FilterColor color={item} key={item}  onClick={() => { setcolor(item) }}></FilterColor>
              ))}
            </Filter>
            <Box sx={{ minWidth: 120, marginLeft: '50px', }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={size}
                  label="Size"
                  onChange={handleChange}
                >
                  {productInfo.size?.map(item => (
                    <MenuItem value={item} key={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Filter_container>
          <AmountContainer>
            <Icon onClick={() => { setcount((count > 1) ? (count - 1) : 1) }}>
              <Remove fontSize='large' />
            </Icon>
            <Amount>{count}</Amount>
            <Icon onClick={() => { setcount((count < 10) ? (count + 1) : 10) }}>
              <Add fontSize='large' />
            </Icon>
            <Button variant='contained' sx={{ marginLeft: '10px' }} onClick={handleClick}>
              ADD TO CART
            </Button>
          </AmountContainer>
        </Info_container>

      </Container>
    </ThemeProvider>
  )
}
