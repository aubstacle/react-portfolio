import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="flex-column d-flex min-vh-100">
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
