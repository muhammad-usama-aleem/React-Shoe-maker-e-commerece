import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Join from "./pages/Join";
import Error from "./pages/Error";
import './App.css';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/collection" component={Collection} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
