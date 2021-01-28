import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <h3 className="text-2xl">Hello wordl</h3>
      </div>
      <Switch>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Router>
  );
}

export default App;
