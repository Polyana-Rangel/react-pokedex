import { CardFooter, CardImage, CardType, CardBody,CardContainer, CardDetails, Link } from "./style"
import {typeImages} from "../../Images"
import backgroundImg from "../../Assets/Background.svg"

const PokemonCard = ({ id, name, typeOne, typeTwo }) => {
  return (
    <CardContainer>
        <CardBody>
          <CardDetails>
            <div id="pokemonDetails">
              <p>{`#${id}`}</p>
              <h2>{name}</h2>
            </div>
            <CardType>
              <img src= {typeImages[typeOne]} alt="type"></img>
              { typeTwo && (<img src= {typeImages[typeTwo]} alt="type"></img>)}            
            </CardType>
          </CardDetails>
          <CardImage>
            <img className="pokemon_image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedeximg"></img>
            <img src= {backgroundImg} alt="pokedeximg"></img>
          </CardImage>

        </CardBody>
        <CardFooter>
          <Link to="/details">Detalhes</Link>
          <button>Capturar!</button>
          
        </CardFooter>
    </CardContainer>

  )
}

export default PokemonCard