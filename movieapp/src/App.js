// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainScreen from "./MainScreen";
import FavoritesScreen from "./FavoritesScreen";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route path="/" exact component={MainScreen} />
        <Route path="/favorites" component={FavoritesScreen} />
      </div>
    </Router>
  );
}

export default App;
