import styled from  'styled-components'
import React, {useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';
import { Link, useNavigate } from 'react-router-dom';




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
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Aggrement = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const Text = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
pointer-events:${(props)=>props.disabled?'none':null};
`
export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const [userinfo, setuserinfo] = useState({
    username: "",
    email: "",
    password: "",
    phone:"",
    address:'',
    gender:'male'
  })
  const handle_change = (e)=>{
    const {name, value} = e.target;
    setuserinfo({...userinfo, [name]: value})
  }
  const handle_register = (e)=>{
    e.preventDefault();
    register(dispatch, userinfo);
    navigate("/login")
  }
  return (
    <Container>
        <Wrapper>
            <Title>CREATE ACCOUNT</Title>
            <Form>
                <Input placeholder='Email' name='email' type='email' onChange={handle_change}/>
                <Input placeholder='Username' name='username' type='string' onChange={handle_change}/>
                <Input placeholder='password' name='password' type='password' onChange={handle_change}/>
                <Input placeholder='phone' name='phone' type='number' onChange={handle_change}/>
                <Input placeholder='address' name='address' type='text' onChange={handle_change}/>
                <Input placeholder='gender' name='gender' type='text' onChange={handle_change}/>
                <div style={{paddingTop: "12px"}}><Link to="/login">Already a user</Link></div>
                <Aggrement>
                <Checkbox {...label} defaultChecked />
                    <Text>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Text>
                    </Aggrement>
                    {error && "User already exists"}
                <Button onClick={handle_register} disabled={userinfo.email.length === 0 && userinfo.username.length === 0 && userinfo.password.length === 0}>CREATE</Button> 
            </Form>
        </Wrapper>
    </Container>

  )
}
