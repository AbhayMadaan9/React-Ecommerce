import styled from 'styled-components'
import React from 'react'
import { popularProducts } from '../data'
import { Product } from './Product'

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

export const Products = () => {
  return (
    <popular_Products>

   <h1 style={{textAlign: 'center'}}>Popular Products</h1>
    <Container>

        {popularProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
    </popular_Products>
  )
}
