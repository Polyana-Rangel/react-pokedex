import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokedexDetailsPage from '../Pages/PokedexDetailsPage'
import PokedexPage from '../Pages/PokedexPage'
import PokemonsListPage from '../Pages/PokemonsListPage'


const Router = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<PokemonsListPage />}
                />
                <Route
                    path="/pokedex"
                    element={<PokedexPage />}
                />
                <Route
                    path="/details/:name"
                    element={<PokedexDetailsPage />}
                />

            </Routes>
        </BrowserRouter>
  )
}

export default Router