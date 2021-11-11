import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, About, Contact, Resume } from "./components";
import Project2 from "./components/Project2";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/reactportfolio" exact component={() => <About />} />
          <Route path="/Projects" exact component={() => <Project2/>} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/resume" exact component={() => <Resume />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
