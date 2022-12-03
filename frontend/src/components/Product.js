import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: ${props=>props.theme.colors.card};
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
flex-direction: column;
`
const Icon = styled.div`

`
export const Product = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Icon >
                    <FavoriteBorderOutlinedIcon />
                </Icon>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon >
                    <SearchOutlinedIcon />
                </Icon>

            </Info>
        </Container>
    )
}
