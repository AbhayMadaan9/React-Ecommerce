import { useState } from 'react';
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: ${props => props.theme.colors.card};
position: relative;
`
const Image = styled.img`
height: 75%;
`
const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: flex-end;
`
const Icon = styled.div`
`

export const Product = ({ item }) => {
     const [heart_state, set_heart_state] = useState(0)
     const [user_heart_state, set_user_heart_state] = useState(false)
    return (
        <Container onClick={()=>{set_heart_state(user_heart_state? 0 : 1); user_heart_state? set_user_heart_state(false): set_user_heart_state(false);}} >
            <Image src={item.img} />
            <Info>
                <Icon>
                    <Checkbox {...label} icon={<FavoriteBorderOutlinedIcon fontSize='large' style={{marginBottom: '-6px'}}/>} checkedIcon={<FavoriteOutlinedIcon color="error" fontSize='large'/>} />
                </Icon>
                <Icon>
                    <ShoppingCartOutlinedIcon fontSize='large' />
                </Icon>
                <Icon >
                    <SearchOutlinedIcon fontSize='large' />
                </Icon>

            </Info>
        </Container>
    )
}
