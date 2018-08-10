import React from "react";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import News from "./Components/News";
import Error from "./Components/Error";
import Navigation from "./Components/Navigation";
import Authentification from "./Components/Authentification";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <section className="table-responsive">
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} />
            <Route path="/news" component={News} />
            <Route path="/authentification" component={Authentification} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </section>
  );
};

export default App;
