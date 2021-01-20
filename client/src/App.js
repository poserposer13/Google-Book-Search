import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path = {["/", "/search"]}>
        <Search />
      </Route>
      <Route exact path= "/saved">
        <Saved />
      </Route>
    </div>
    </Router>
  );
}


export default App;
