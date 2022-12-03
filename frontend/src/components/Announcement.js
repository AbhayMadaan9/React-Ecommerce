import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 25px;
background-color: ${props => props.theme.colors.announce}; 
color: white;
font-size: 14px;
font-weight: 500; 
text-align: center;
`
const Announcement = () => {
  return (
    <>
    <Container>Super Deals! Free Shipping on Orders Over Rs.150</Container>
    </>
  )
}

export default Announcement