import {css} from 'styled-components'
export const small_devices = (props)=>{
return css`
@media only screen and (max-width: 807px){
    ${props}
}
`
}