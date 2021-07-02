import {Switch,Route,NavLink,Redirect} from "react-router-dom";
import PokemonList from './containers/PokemonList'
import Pokemon from "./containers/Pokemon";

function App() {
  return (
    <div>
        <nav className="sticky top-0 flex justify-end items-center h-14 w-screen bg-gray-500">
            <NavLink className="mr-12" to={"/"}>Search</NavLink>
        </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon}/>
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
