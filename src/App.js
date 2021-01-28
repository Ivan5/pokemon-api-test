import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState([]);

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

  useMemo(() => {
    if (text.length === 0) {
      setFilter([]);
      return;
    }
    setFilter(() =>
      pokemon.results?.filter((pokemon) => pokemon.name.includes(text))
    );
  }, [pokemon.results, text]);

  return (
    <Router>
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Link to="/">
            <header className="text-4xl text-yellow-700">Pokemon Picker</header>
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Enter Pokemon here"
            className="mt-10 p-2 bordr-blue-500 border-2"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Switch>
        <Route path="/about/:slug" component={About}></Route>
        <Route path="/">{pokemon && <Home pokemon={filter} />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
