import React, { useState } from "react"
import styled from "styled-components"
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { small_devices } from "../responsive";
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { Logout } from "../redux/apiCalls";



const Container = styled.div`
height: auto;
background-color: ${props => props.theme.colors.main};
color: white;
position: sticky;
z-index: 1;
top: 0;
`
const Wrapper = styled.div`
padding: 1rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
${small_devices({ "justify-content": " center" })}
`
const Left = styled.div`
flex: 1;
margin: 0;
${small_devices({ "flex": "0", "cursor": "pointer" })}
`
const Center = styled.div`
flex: 1;
margin-top: 1rem;
${small_devices({ "display": "none" })}
`
const Right = styled.div`
flex: 1;
margin-top: 1rem;
${small_devices({ "display": "none" })}
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
  const dispatch = useDispatch()
  const {islogin} = useSelector((state)=>state.user)
  console.log(islogin)
  const [open, setOpen] = useState(false);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setOpen(false);
  };
const handle_logout = ()=>{
  Logout(dispatch);
}
  return (
    <Container >
      <Wrapper>
        <Left onClick={() => { islogin && setOpen(true) }} >
          <Link to='/'><Logo src="./STORE.png" /></Link>
        </Left>
    {!islogin &&
        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >

        <AppBar sx={{ position: 'relative', alignItems: "end", backgroundColor: `#c5aae8` }}>
          <Toolbar>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>

          <ListItem >
            <Link to='/register'>
              <ListItemText
                primary="Register"
              />
            </Link>
          </ListItem>
          <Divider />
          <ListItem >
            <Link to='/login'>
              <ListItemText
                primary="Login"
              />
            </Link>
          </ListItem>

        </List>
      </Dialog> 
    }
        <Center>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
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
           {islogin? 
            <>
            <Icons_item><Link to='/profile' style={{ textDecoration: 'none', color: 'white'}}><AccountCircleOutlinedIcon fontSize="large"/></Link></Icons_item>
           <Icons_item><Link to ='/Cart'><ShoppingCartIcon color="white" fontSize="large"/></Link> </Icons_item>
            <Icons_item onClick={handle_logout}><LogoutIcon fontSize="large"/></Icons_item>
            </> 
           :
           <>
            <Icons_item><Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link></Icons_item>
            <Icons_item><Link to='/Register' style={{ textDecoration: 'none', color: 'white' }}>Register</Link></Icons_item>
           </>
          }
          </Icons>
        </Right>
      </Wrapper>
    </Container>


  )
}

export default Navbar