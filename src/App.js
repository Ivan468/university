import React from "react";
import "./App.css";
import ScriptTag from "react-script-tag";
import Content from "./component/Content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "./component/Modal";
// import "./AnimateCircle.js";

// import Script from "./script"
// import Header from "./component/Header"

function App() {
  return (
    <Router>
      <div className="up-button">
        <button></button>
      </div>
      <div className="rector-block">
        <div className="gender">
          <svg
            width="20"
            height="29"
            viewBox="0 0 20 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="5" r="4" stroke="#21CAFF" strokeWidth="2" />
            <path
              d="M1.86852 15L10 27.1972L18.1315 15L1.86852 15Z"
              stroke="#21CAFF"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="text-block">
          <h2>Иван Иванович</h2>
          <p>Ректор</p>
        </div>
      </div>
      <header>
        <div className="search-wrap">
          <form action="submit">
            <button className="search-button"></button>
            <input type="text" className="search" placeholder="Поиск" />
          </form>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/modal">
          <Modal />
        </Route>
      </Switch>

      <footer>
        <div className="logo">
          <img src="./image/Logo.svg" alt="Logo" />
        </div>
      </footer>
      <ScriptTag script src="./js/animate-circle.js" />
      <ScriptTag script src="./miniature.js" />
    </Router>
  );
}

export default App;
