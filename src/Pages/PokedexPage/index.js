import Header from "../../Components/Header"
import { Main } from "./style"
import { usePokemon } from "../../Contexts/pokedexContext"
import PokemonCard from "../../Components/PokemonCard"

const PokedexPage = () => {
  const {pokemons} = usePokemon()
  return (
    <>
      <Header showAllPokemons/>
        <h1>Meus Pokémons</h1>
      <Main>
          {pokemons && (
            pokemons.map(pokemon => (
              <PokemonCard
                key={pokemon}
                name={pokemon}
                showExcluirPokemon={true}
              />
            ))
          )}
      </Main>
    </>
  )
}

export default PokedexPage