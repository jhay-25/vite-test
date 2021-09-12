import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScTrigger from "./pages/ScTrigger";
import ScTriggerBoxes from "./pages/ScTriggerBoxes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/scrolltrigger" exact>
          <ScTrigger />
        </Route>
        <Route path="/scrolltriggerboxes" exact>
          <ScTriggerBoxes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
