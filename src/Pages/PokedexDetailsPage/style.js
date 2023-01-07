import styled from "styled-components";
import backgroundImg from "../../Assets/Background.svg"


export const CardContainerDetails = styled.div`
    display:flex;
    justify-content:space-between;
    width:97vw;
    border-radius: 30px;
    background-color:#729F92;
    margin-top: 95px;
    margin-left: 12px;
`
export const Div = styled.div`
    margin-top:-5px;

    background-image: url(${backgroundImg});
    background-size: cover;
    h1{
        padding-left:30px;
        padding-top:30px;

    }
   


`

export const Card1 = styled.div`
width:50%;
display:flex;
justify-content:space-between;
   
`
export const CardPokemomImagem = styled.div`
img{
    background-color:white;
    width:18vw;
    border-radius:8px;
    margin-left: 24px;
    margin-top: 12px;
}
   
`
export const CardStats = styled.div`
p{
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    width: 312px;
    height: 97%;
    margin-top: 12px;
    color: black;
    font-weight:700;
    padding-top: 18px;
    padding-left:8px;
    display:flex;

}


   
`
export const Card2 = styled.div`
    width:50%;
    display:flex;
 
    margin-left:80px;
    flex-direction: column;

    background-image: url(${backgroundImg});
    background-size: cover;

   
   `
   export const CardContainerPokemom = styled.div`
 
      
      `






export const CardMoves = styled.div`
    display:flex;
    flex-direction: column;

    margin-top:74px;
    border-radius: 10px;
    width: 220px;
    background-color: rgb(255, 255, 255);
    height: 310px;
    padding:  18px 8px 0;;

p{
    
    color: black;
    font-weight:700;
    

}
 
.moves{
    align-self:center;
    margin:3px;
    background-color:#ECECEC;
    border-radius: 30px;
    border: 1px dashed rgb(0, 0, 0, 0.14);
    color:black;
    font-family: "Montserrat", sans-serif;
    font-size:14px;
    font-weight:400;
    text-align: center;
    padding: 8px 16px;
}
   
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

