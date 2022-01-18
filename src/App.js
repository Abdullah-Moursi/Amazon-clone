import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <Header />
        <Switch>
          <Route exact path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>{" "}
    </Router>
  );
}

export default App;
