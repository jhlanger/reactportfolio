import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Projects, About, Contact, Resume } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <About />} />
          <Route path="/Projects" exact component={() => <Projects />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/resume" exact component={() => <Resume />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
