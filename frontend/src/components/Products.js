import styled from 'styled-components'
import React from 'react'
import { popularProducts } from '../data'
import { Product } from './Product'


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`


export const Products = () => {
  return (
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}
