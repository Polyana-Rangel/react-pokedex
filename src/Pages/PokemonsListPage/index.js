import { useEffect, useState } from "react"
import Header from "../../Components/Header"
import PokemonCard from "../../Components/PokemonCard"
import api from "../../Services/api"

const PokemonsListPage = () => {
  const [pokemons,setPokemons] = useState([])

  useEffect(() => {
    async function ConsumePokeApi() {
      const response = await api.get(`/pokemon`)
  
      const pokemonList = await Promise.all(response.data.results.map(async (result) => await GetPokemonDetails(result.name)))
  
      setPokemons(pokemonList)
      console.log(pokemons, pokemonList, (pokemonList.length))
    }
  
    async function GetPokemonDetails(name) {
      const response = await api.get(`/pokemon/${name}`)
  
      return response.data;
    }
  
    ConsumePokeApi()
  }, [])

  return (
    <>
      <Header showPokedexBtn/>
      {pokemons && (
        pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} typeOne={pokemon.types[0].type.name} typeTwo={pokemon.types[1] && pokemon.types[1].type.name}/>
        ))
      )}
      
      <PokemonCard  />
    </>
    
  )
}

export default PokemonsListPage