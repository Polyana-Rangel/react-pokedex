import Header from "../../Components/Header"
import { Card1, Card2, CardContainerDetails, CardPokemomImagem, CardStats, CardMoves, CardContainerPokemom } from "./style"
import { Div, CardImage, CardType, CardBody, CardDetails } from "./style"
import { typeImages } from "../../Images"



const PokedexDetailsPage = () => {
  return (
    <>

      <Header showAllPokemons showDeletePokemonBtn />
      
      <Div >
        <h1>Detalhes</h1>
      <CardContainerDetails>
        <Card1>
          <CardPokemomImagem>
            <div>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemom de frente"></img>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" alt="pokemom de costas"></img>
            </div>

          </CardPokemomImagem>

          <CardStats>
            <p>Base Stats</p>

          </CardStats>

        </Card1>

        <Card2>


          <CardContainerPokemom>

            <CardBody>
              <CardDetails>
                <div id="pokemonDetails">
                  <p>#01</p>
                  <h2>Bulbasaur</h2>
                </div>
                <CardType>
                  <img src={typeImages["Grass"]} alt="type"></img>
                  <img src={typeImages["Poison"]} alt="type"></img>
                </CardType>
              </CardDetails>
              <CardImage>
                <img className="pokemon_image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedeximg"></img>
                {/* <img id="backgroundImg" src= {backgroundImg} alt="pokedeximg"></img> */}

              </CardImage>

            </CardBody>

          </CardContainerPokemom>

          <CardMoves>
            <p>Moves</p>
            <div className="moves">Razor gcvujvyg</div>
            <div className="moves">Razor</div>
            <div className="moves">Razor</div>
            <div className="moves">Razor</div>
          </CardMoves>

        </Card2>
        
      </CardContainerDetails>

      </Div>
    </>
  )
}

export default PokedexDetailsPage