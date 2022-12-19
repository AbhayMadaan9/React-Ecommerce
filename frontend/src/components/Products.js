import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
//import { popularProducts } from '../data'
import { Product } from './Product'
import axios from 'axios'


const popular_Products = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

export const Products = ({colors, brands, sorts, cat}) => {
  console.log({colors, brands, sorts, cat})
  const [products, setproducts] = useState([]);
  const [filteredproducts, setfilteredproducts] = useState([]);
  
  useEffect(()=>{
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/product?category=${cat}`
            : "http://localhost:5000/product"
        );
        setproducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat])
  return (
    <popular_Products>

   <h1 style={{textAlign: 'center'}}>{cat} Products</h1>
    <Container>

        {products.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
    </popular_Products>
  )
}
