import styled from 'styled-components'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
const Container = styled.div`
height: 80vh;
background-color: #f1f2ed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h1`
font-size: 60px;
margin-bottom: 20px;
`
const Desc = styled.p`
font-size: 24px;
font-weight: 500;
text-align: center;
`
const InputCont = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
margin-top: 2rem;
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex: 0;
background-color: teal;
color: white;
border: none;
`

export const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Thanks for trying our products! We are dedicated to keeping our customers up to date with the latest product updates. To make sure you don't miss out, please click the link below and follow the instructions to sign up for our product updates. Thanks for your support!</Desc>
        <InputCont>
        <Input placeholder='write here..'/>
        <Button>
            <SendIcon/>
        </Button>
        </InputCont>
    </Container>
  )
}
