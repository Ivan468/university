import React, { Component } from "react";
import "./App.css";
import ScriptTag from "react-script-tag";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./layouts/Main";
import { AnimatedSwitch } from "react-router-transition";
import Modal from "./component/Modal.js";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Upbtn from "./component/Upbtn";

// import "./AnimateCircle.js";
// import Script from "./script"
// import Header from "./component/Header"
export default class App extends Component {
  
  render() {
    return (
      <Router>
        <Upbtn />
        <Header />
        <Switch>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/modal">
              <Modal />
            </Route>
          </AnimatedSwitch>
        </Switch>
        <Footer />
        
      </Router>
    );
  }
  
}

