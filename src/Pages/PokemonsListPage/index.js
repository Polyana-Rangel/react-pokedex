import { useEffect, useState } from "react"
import Header from "../../Components/Header"
import PokemonCard from "../../Components/PokemonCard"
import api from "../../Services/api"
import { Main } from "./style"

const PokemonsListPage = () => {
  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
    async function ConsumePokeApi() {
      const response = await api.get(`/pokemon`)
      setPokemons(response.data.results)
    }


    ConsumePokeApi()
  }, [])

  return (
    <>
      <Header showPokedexBtn />
      <Main>
        {pokemons && (
          pokemons.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              showCapturarPokemon ={true}
            />
          ))
        )}
      </Main>
    </>

  )
}

export default PokemonsListPage