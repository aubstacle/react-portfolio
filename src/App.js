import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    </HashRouter>
  );
}

export default App;
