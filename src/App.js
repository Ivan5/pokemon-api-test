import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
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
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Link to="/">
            <header className="text-4xl text-yellow-700">Pokemon Picker</header>
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/about/:slug" component={About}></Route>
        <Route path="/">{pokemon && <Home pokemon={pokemon.results} />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
