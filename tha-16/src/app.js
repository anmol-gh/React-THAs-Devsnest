import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Day16 from "./components/container.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/day16">
          <Day16 />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/day17">
          <Day16 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
