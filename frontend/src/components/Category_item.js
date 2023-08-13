import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
min-width: 30rem;
height: 60vh;
margin: 1rem;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
bottom: 0;
top: 0;
right: 0;
left: 0;
color: white;
&:hover {
    background-color: ${props => props.theme.colors.card};  
    /* transition: background-color 1.5s ease-in; */
}
`

const Title = styled.h1``
const Para = styled.p`
text-align: center;
font-size: x-large;
`
const Button = styled.button`
border: none;
background: white;
font-weight: 600;
padding: 10px;
color: gray;
border-radius: 2rem;
font-size: large;
cursor: pointer;
`

export const Category_item = ({ item }) => {
    const [back_info, set_back_info] = useState(false)
    return (
        <Container onMouseOver={()=> {set_back_info(true)}} onMouseOut={()=> {set_back_info(false)}}>
            <Image src={item.img} />
            
                {back_info ?
                    <Info>
                        <Para>{item.para}</Para>
                        <Title>{item.title}</Title>
                        <Button><Link to={`/products?category=${item.category}`} style={{color: 'gray', textDecoration: 'none'}}>SHOP MORE</Link></Button>
                    </Info>:
                    <Info>
                        <Title>{item.title}</Title>
                        <Button><Link to={`/products?category=${item.category}`} style={{color: 'gray', textDecoration: 'none'}}>SHOP MORE</Link></Button>
                    </Info>
                    }         

        </Container>
    )
}

