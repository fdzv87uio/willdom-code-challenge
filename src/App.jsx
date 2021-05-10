import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gnews from "./pages/Gnews";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/gnews" component={Gnews} />
      </Switch>
    </>
  );
}
