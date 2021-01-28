import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, idx) => {
          return { ...pokemon, idx: idx + 1 };
        });
        setPokemon({ ...data, results });
      });
  });

  return (
    <Router>
      <div className="App">
        <h3 className="text-2xl">Hello wordl</h3>
        {pokemon && <Home pokemon={pokemon.results} />}
      </div>
      <Switch>
        <Route path="/about/:slug" component={About}></Route>
      </Switch>
    </Router>
  );
}

export default App;
