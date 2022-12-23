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

export const Products = ({filters, sorts, cat}) => {
  console.log({filters})
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
  //now we have get the products of the given category now we filter them according to size, color, brands etc.. (filers object contain these)
  useEffect(() => {
    cat &&
    setfilteredproducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
        
      );
  }, [products, cat, filters]);
  //sort them according to time.
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
    <popular_Products>

   <h1 style={{textAlign: 'center'}}>{cat} </h1>
    <Container>

         { cat? filteredproducts.map(item=>(
            <Product item={item} key={item.id}/>
        )): products.slice(0,5).map(item=>(
          <Product item={item} key={item.id}/>
      ))}
    </Container>
    </popular_Products>
  )
}
