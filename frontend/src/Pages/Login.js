import styled from  'styled-components'
import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import {login} from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Container = styled.div`
width: 100%;
height: 97vh;
margin: 0;
background-image: linear-gradient( rgba(255, 255,255, 0.5), rgba(255,255, 255, 0.5)), url('https://wallpapercave.com/wp/wp4542077.jpg');
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
text-align: center;
`
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin: 20px 0px;
`
// const A = styled.a`
// margin-top: 10px;
// text-decoration: none;
// cursor: pointer;
// color: black;
// `
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { islogin, error } = useSelector((state) => state.user);
  const [userinfo, setuserinfo] = useState({
    username: "",
    password: ""
  })
  const handle_change = (e)=>{
    const {name, value} = e.target;
    setuserinfo({...userinfo, [name]: value})
  }
  const handle_login = (e)=>{
    e.preventDefault();
    login(dispatch, userinfo);
  }
  islogin && navigate("/")
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form>
            <TextField id="outlined-basic" label="Username" variant="outlined" name='username' sx={{margin: '15px 0px', width: '50%'}} onChange={handle_change} />
            <TextField id="outlined-basic" label="Password" variant="outlined" type='password' name='password' sx={{margin: '15px 0px', width: '50%'}} onChange={handle_change}/>
                {/* <Input placeholder='Username'/>
                <Input placeholder='password'/> */}
                {error && "Invalid Credentials. Try again"}
                <Button onClick={handle_login} disabled={islogin}>Login</Button> 
                <Link to='/' style={{
                  marginTop: '10px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: 'black'
                }}>Forget Password?</Link>
                <Link to='/register' style={{
                  marginTop: '10px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: 'black'
                }}>Create New Account</Link>
            </Form>
        </Wrapper>
    </Container>

  )
}
