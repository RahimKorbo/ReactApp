import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Dashboard } from "./Components/Dashboard";
import Feature from "./Components/Feature";
import Gallery from "./Components/Gallery";
import Services from "./Components/Services";
import Team from "./Components/Team";



export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/team" component={Team} />
      </Switch>
    </main>
  );
}
