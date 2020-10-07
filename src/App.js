import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Movie from "./Movie";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={Movie} />
      <Route path="/movielist" exact={true} component={MovieList} />
      <Route path="/moviedetail/:id" exact={true} component={MovieDetail} />
    </div>
  );
}

export default App;
