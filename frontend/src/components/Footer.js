import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Container = styled.div`
display: flex;
background-color: #f1f3f4;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Title = styled.h1`
font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const Desc = styled.p`
font-size: large;
font-weight: 500;
`
const Social_info = styled.div`
display: flex;
align-items: center;
gap: 2rem;
margin: 40px 0px 0px 0px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
`
const Links = styled.h2`
margin-top: 10px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 1rem;
height: 50%;
`
const ListItem = styled.li`
`
const Right = styled.div`
flex: 1;
padding: 20px;
display: flex;
flex-direction: column;
`
const ContactItems = styled.div`
margin-bottom: 20px;
display: flex;
flex-direction: row;
align-items: center;
`
const Payments = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 3rem;
`
export const Footer = () => {
  return (
    <Container>
        <Left>
            <Title>MADAAN STORE</Title>
            <Desc>"Shop for Anything, Anytime with Madaan Ecommerce!"</Desc>
            <Social_info>
                <a href="https://www.facebook.com/abhay.madaan.568/"><FacebookIcon fontSize='large' color='primary'/></a>
                <a href="https://www.instagram.com/madaan_abhay/"> <InstagramIcon fontSize='large' color='error'/></a>
                <a href="/"><TelegramIcon fontSize='large' color='primary'/></a>
                <a href="/"><TwitterIcon fontSize='large' color='primary'/></a>
            </Social_info>
        </Left>
        <Center>
            <Links>Usefull Links</Links>
            <List>
                <ListItem><a href="" style={{textDecoration: 'none', color: 'black'}}>Home</a></ListItem>
                <ListItem><a href="" style={{textDecoration: 'none', color: 'black'}}>Cart</a></ListItem>
                <ListItem><a href="" style={{textDecoration: 'none', color: 'black'}}>Man Fashion</a></ListItem>
                <ListItem><a href="" style={{textDecoration: 'none', color: 'black'}}>Woman Fashion</a></ListItem>
                <ListItem><a href="" style={{textDecoration: 'none', color: 'black'}}>Accessories</a></ListItem>
                <ListItem><a href="" style={{textDecoration: 'none', color: 'black'}}>My Account</a></ListItem>
                <ListItem><a href="" style={{textDecoration: 'none', color: 'black'}}>Wishlist</a></ListItem>
                <ListItem><a href="" style={{textDecoration: 'none', color: 'black'}}>Terms&Conditions</a></ListItem>
            </List>
        </Center>
        <Right>
            <Links>Contact</Links>
             <ContactItems>
             <LocationOnIcon style={{marginRight: '10px'}}/>
                <Desc>New Suraj Nagri,Abohar, Punjab, 152116</Desc>
             </ContactItems>
             <ContactItems>
                <PhoneIcon style={{marginRight: '10px'}}/>
                <Desc>+919999467336</Desc>
             </ContactItems>
             <ContactItems>
                <EmailIcon style={{marginRight: '10px'}}/>
                <Desc><a  href="mailto:madaanabhay9@gmail.com?subject=Customer Feedback" style={{textDecoration: 'none', color: 'black'}}>madaanabhay9@gmail.com</a></Desc>
             </ContactItems>
             <Payments>
             <i class="fa-brands fa-cc-paypal fa-2xl"></i>
             <i class="fa-brands fa-paypal fa-2xl"></i>
             <i class="fa-brands fa-cc-apple-pay fa-2xl"></i>
             <i class="fa-brands fa-google-pay fa-2xl"></i>
             </Payments>
        </Right>
    </Container>
  )
}
