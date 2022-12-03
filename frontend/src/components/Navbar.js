import React from "react"
import styled from "styled-components"
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const Container = styled.div`
height: 8rem;
background-color: ${props => props.theme.colors.main};
color: white;
`
const Wrapper = styled.div`
padding: 1rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: "center";
`
const Left = styled.div`
flex: 1;
margin: 0;
`
const Center = styled.div`
flex: 1;
margin-top: 1rem;
`
const Right = styled.div`
flex: 1;
margin-top: 1rem;
`
// const Searchcontainer = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// margin-top: 1rem;
// `
// const Input = styled.input`
// border-radius: .5rem;
// border-style: none;
// min-width: 16rem;
// max-width: 10rem;
// height: 2rem;
// `
const Icons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: end;
`
const Icons_item = styled.h3`
font-weight: bold;
margin-inline: 2rem;
  cursor: pointer;
`

const Logo = styled.img`
width: 15rem;
border-radius: 1rem;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left> 
          <Logo src="./STORE.png" />
        </Left>
        <Center>
           <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
           <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Search.."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

      </Paper>
        </Center>
        <Right>
          <Icons>
            <Icons_item>SIGN IN</Icons_item>
            <Icons_item>SIGN UP</Icons_item>
          </Icons>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar