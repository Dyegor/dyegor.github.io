import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from "./components/navbar-components/Navbar";
import About from "./components/about-components/About";
import Portfolio from "./components/portfolio-components/Portfolio";
import Footer from "./components/footer-components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}