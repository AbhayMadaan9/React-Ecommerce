import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
//import { popularProducts } from '../data'
import { Product } from './Product'
import axios from 'axios'
import { filledInputClasses } from '@mui/material'


const Popular_Products = styled.div`
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

export const Products = ({color,size, sorts, cat}) => {
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
        setfilteredproducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat])
  //now we have get the products of the given category now we filter them according to size, color, brands etc.. (filers object contain these)
  useEffect(() => {
    cat && 
    setfilteredproducts(
        products.filter((item) => {
          if (color && size) {
            return  (item.color.includes(color) && item.size.includes(size));
          }
          if (color) {
            return item.color.includes(color);
          }
          if (size) {
            return item.size.includes(size);
          }
         })
    );

  }, [color, size]);
  

  useEffect(() => {
    if (sorts === "newest") {
      setfilteredproducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sorts === "asc") {
      setfilteredproducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredproducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
  }
  }, [sorts]);

  return (
    <>

    <Popular_Products>
   <h1 style={{textAlign: 'center'}}>{cat} </h1>
    <Container>
         { cat? filteredproducts.map(item=>(
            <Product item={item} key={item.id}/>
        )): products.slice(0,5).map(item=>(
          <Product item={item} key={item.id}/>
      ))}
     
    </Container>
    </Popular_Products>
    </>
   
  )
}
