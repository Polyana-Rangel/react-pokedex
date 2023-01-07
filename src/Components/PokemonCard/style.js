import styled from 'styled-components'
import { Link as ReactLink } from 'react-router-dom'


export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:400px;
    border-radius: 10px;
    background-color:#729F92;
    margin-top: 32px;
    margin-left: 12px;
`
export const CardBody = styled.div`
    display:flex;
    justify-content:space-between;
    padding-left: 18px;
    padding-top: 20px;  
`
export const CardDetails = styled.div`
    display:flex;
    flex-direction:column;

    #pokemonDetails {
        display:flex;
        flex-direction:column;

        p {
            font-family:"Inter", sans-serif;
            font-size: 14px;
            font-weight:700;
        }

        h2 {
            font-family:"Inter", sans-serif;
            font-size: 1.6rem;
        }
    }
  
`
export const CardType = styled.div`
display:flex;
width: 150px;
margin-top: 8px;

img{
    height:28px;
    width:78px;
}

img + img {
    margin-left: 4px;
}
  
`
export const CardImage = styled.div`
display:flex;
justify-content:flex-end;
/* padding-right:8px; */

img{
    margin-top: -19px;
    height: auto;
    width:100%;
}

.pokemon_image{
    position: absolute;
    margin-top: -68px;
    margin-right:12px;
    max-height: 180px;
    max-width: 180px;
}
  
`
export const CardFooter = styled.div`
display:flex;
justify-content: space-between;

padding: 0 14px 8px;
margin-top: -38px;

button{
    border-radius: 4px;
    border:0;
    height: 32px;
    width: 124px;
    font-size: 14px;
    font-family: "Poppins",sans-serif;
}
`

export const Link = styled(ReactLink)`

    font-weight: 700;
    color:white;

    :hover{
                color: rgba(255, 255, 256, 0.7);

    }
`