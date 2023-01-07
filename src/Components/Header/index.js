import { HeaderContainer, Link, Logo, ButtonExcluir, Button } from "./style"
import logo from "../../Assets/logo.png";


const Header = ({ showAllPokemons, showPokedexBtn, showDeletePokemonBtn }) => {
  return (
    <HeaderContainer>
      {showAllPokemons ? <div>  {"<"}  <Link> Todos Pokémons </Link> </div> : <div className="null"></div>}

      <Logo src={logo} alt="logo" />

      {showPokedexBtn ? (
        <Button>Pokédex</Button>
      ) : (
        showDeletePokemonBtn ? (
          <ButtonExcluir>Excluir da Pokédex</ButtonExcluir>
        ) : (
          <div className="null"></div>
        )
      )}
    </HeaderContainer>
  )
}

export default Header