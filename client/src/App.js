import React from "react";
import "./index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route exact path={["/", "/Homepage"]} component={Homepage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
