import React from "react";
import ReactDOM from "react-dom";

import Nav from './Components/Nav';
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import Skills from "./Components/Skills";
import Rockem from "./Components/Rockem";
import GoodShepherd from "./Components/GoodShepherd";
import Projects from "./Components/Project";
import Footer from "./Components/Footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <div className="content">
          <Feature />
          <Skills />
          <Rockem />
          <GoodShepherd />
          <Projects />
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

let element = document.getElementById("app");

ReactDOM.render(<App />, element);
