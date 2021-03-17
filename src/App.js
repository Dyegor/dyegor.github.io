import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from "./components/navbar-components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/footer-components/Footer";

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}